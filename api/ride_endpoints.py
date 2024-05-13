from fastapi import APIRouter, HTTPException

import database.rides as db

router = APIRouter()


@router.post("/add_ride")
async def add_ride(ride_data: dict):
    ride_id = db.add_ride(ride_data["wallet"], ride_data["start"], ride_data["destination"], ride_data["price"], ride_data["time"])
    return {"ride_id": ride_id}


@router.get("/get_rides")
async def get_rides():
    rides = db.get_rides()
    return {"rides": rides}

@router.post("/book_ride")
async def book_ride(booking_data: dict):
    booking = db.book_ride(booking_data["ride_id"], booking_data["user"])
    return {"booking": booking}

@router.get("/get_bookings/{user}")
async def get_bookings(user: str):
    bookings = db.get_bookings(user)
    return {"bookings": bookings}