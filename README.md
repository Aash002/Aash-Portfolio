# Aashish Waghela Portfolio

A static, Vercel-ready portfolio webapp built from the supplied CV.

## Run locally

Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 5173
```

Then visit `http://localhost:5173`.

## Deploy free on Vercel

1. Push this `portfolio/` folder to a GitHub repository.
2. In Vercel, choose **Add New → Project**.
3. Import the repository.
4. Framework preset: **Other**.
5. Build command: leave empty.
6. Output directory: `.` if the repo root is this folder, or `portfolio` if the whole workspace is the repo.
7. Deploy.

## Customize links

Update the placeholder LinkedIn URL in `index.html` if you want it to point to your exact profile. The CV download is already wired to `assets/AashishWaghela_CV.pdf`.
