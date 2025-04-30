# ==== build frontend ====
FROM node:20 AS frontend
WORKDIR /app
COPY frontend/ .
RUN npm ci && npm run build

# ==== build backend ====
FROM python:3.12-slim AS backend
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1
WORKDIR /app
COPY backend/ .
COPY --from=frontend /app/dist static/
COPY --from=frontend /app/dist/index.html templates/
RUN pip install -r requirements.txt
RUN python manage.py collectstatic --noinput      # <-- new

EXPOSE 8000
CMD ["gunicorn", "beleza.wsgi:application", "--bind", "0.0.0.0:8000"]
