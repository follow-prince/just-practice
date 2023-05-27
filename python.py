import time

# Define the task to be performed every hour
def perform_task():
    print("Performing task...")

# Calculate the total number of iterations (24 hours * 60 minutes)
total_iterations = 24 * 60

# Run the loop for the specified number of iterations
for iteration in range(total_iterations):
    # Calculate the current hour
    current_hour = (iteration // 60) % 24

    # Check if it's time to perform the task (once every hour)
    if (iteration % 60) == 0:
        perform_task()

    # Print the current hour
    print(f"Current hour: {current_hour}")

    # Wait for 1 minute before the next iteration
    time.sleep(60)
