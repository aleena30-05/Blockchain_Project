from supabase import create_client

SUPABASE_URL = "https://butlkkfcchbptudyobap.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1dGxra2ZjY2hicHR1ZHlvYmFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MjAyOTAsImV4cCI6MjAzMTE5NjI5MH0.cBNlaCxtu2UEhtSjp7SY5GQFnXiI-YjycSIE06WN_qk"

def connect():
    return create_client(SUPABASE_URL, SUPABASE_KEY)