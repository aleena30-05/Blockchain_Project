from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database.connection import connect
from api.ride_endpoints import router as ride_router

app = FastAPI()

def get_supabase_client():
    return connect()

app.include_router(ride_router, prefix="/ride", tags=["ride"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)