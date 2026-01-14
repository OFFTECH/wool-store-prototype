# 🧶 Knitting Wool Store - Headless

A premium e-commerce store built with **Next.js** and **MedusaJS (v2)**.

## Project Structure
- `/storefront`: Next.js web application.
- `/backend`: MedusaJS commerce engine.

## Local Development
1. **Backend**:
   ```bash
   cd backend
   npm install
   npx medusa develop
   ```
2. **Storefront**:
   ```bash
   cd storefront
   npm install
   npm run dev
   ```

## Deployment
### 1. Storefront (Vercel)
- Root Directory: `storefront`
- Framework Preset: `Next.js`
- Environment Variables:
  - `NEXT_PUBLIC_MEDUSA_BACKEND_URL`: Your Backend URL
  - `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY`: Your Medusa Publishable Key

### 2. Backend (Railway/Render)
- Root Directory: `backend`
- Build Command: `npm run build`
- Start Command: `npm run start`
- Environment Variables:
  - `DATABASE_URL`: Your Supabase URI
  - `STORE_CORS`: Your Storefront URL
  - `ADMIN_CORS`: Your Backend URL + Admin path
  - `COOKIE_SECRET`: ...
  - `JWT_SECRET`: ...
