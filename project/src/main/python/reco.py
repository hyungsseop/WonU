from fastapi import APIRouter

reco_router = APIRouter()

@reco_router.post("/todo")
async def add_todo(todo:dict) -> dict:
    return {
        "massage" : "sucessfully"
    }

@reco_router.post("/login-recommend")
async def login_user_reco(todo:dict) -> dict:
    return {

    }

@reco_router.post("/unlogin-recommend")
async def unlogin_user_reco(todo:dict) -> dict:
    return {

    }