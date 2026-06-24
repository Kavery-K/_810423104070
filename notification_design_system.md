# Stage 1

## Approach

Notifications are prioritized based on weight and recency.

Priority Order:
- Placement = 3
- Result = 2
- Event = 1

If two notifications have the same weight, the most recent notification is given higher priority.

## Algorithm

1. Assign weight to each notification type.
2. Sort notifications by weight in descending order.
3. If weights are equal, sort by timestamp in descending order.
4. Return the first 10 notifications.

## Efficient Maintenance of Top 10

As new notifications arrive, a Min Heap (Priority Queue) of size 10 can be maintained.

- Insert new notification.
- Remove lowest priority notification when size exceeds 10.
- Keep only top 10 notifications at all times.

## Time Complexity

Sorting Approach: O(n log n)

Heap Approach: O(log 10) ≈ O(1) per insertion.