from fastapi import FastAPI
from reco import reco_router

app = FastAPI()

@app.get("/")
async def welcome() -> dict:
    return {
        "massage" : "Hello, world"
    }

app.include_router(reco_router)