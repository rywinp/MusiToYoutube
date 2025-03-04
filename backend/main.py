from fastapi import FastAPI

app = FastAPI()


@app.get("/stepOne/{URL:path}")
async def stepOne(URL : str):
    decoded_url = unquote(URL)
    return {"URL": decoded_url}