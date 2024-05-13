from database.connection import connect

# Add ride to db
def add_ride(wallet: str, start: str, destination: str, price: float, time: str):
    client = connect()
    try:
        response = client.table("Rides").insert({"wallet_address": wallet, "start_location": start, "destination": destination, "price": price, "start_time": time}).execute()
        response = dict(response)
        return response["data"][0]["ride_id"]
    except Exception as e:
        print("\n\nError inserting ride into database: ", e)


# Get all rides from db
def get_rides():
    client = connect()
    print("Good connect") 
    try:
        response = client.table("Rides").select("*").execute()
        response = dict(response)
        return response["data"]
    except Exception as e:
        print("\n\nError retrieving users, Exception Thrown: \n\n", e)
        
def book_ride(ride_id: int, user: str):
    client = connect()
    try:
        response = client.table("Bookings").insert({"ride_id": ride_id, "user": user}).execute()
        response = dict(response)
        return response["data"]
    except Exception as e:
        print("\n\nError booking ride into database: ", e)
        
        
def get_bookings(user: str):
    client = connect()
    try:
        response = client.table("Bookings").select("ride_id", "Rides(start_location, destination, start_time, price)").eq("user", user).execute()
        response = dict(response)
        return response["data"]
    except Exception as e:
        print("\n\nError retrieving bookings, Exception Thrown: \n\n", e)