class Notification {
    constructor(id, type, message, timestamp) {
        this.id = id;
        this.type = type;
        this.message = message;
        this.timestamp = new Date(timestamp);
    }
}

function getWeight(type) {
    if (type === "placement") return 3;
    if (type === "result") return 2;
    if (type === "event") return 1;
    return 0;
}

function getTop10Notifications(notifications) {
    return notifications
        .sort((a, b) => {
            const weightDiff = getWeight(b.type) - getWeight(a.type);

            if (weightDiff !== 0) {
                return weightDiff;
            }

            return b.timestamp - a.timestamp;
        })
        .slice(0, 10);
}

const notifications = [
    new Notification(1, "event", "Workshop", "2025-06-20T10:00:00"),
    new Notification(2, "placement", "TCS Hiring", "2025-06-23T09:00:00"),
    new Notification(3, "result", "Semester Result", "2025-06-22T08:00:00"),
    new Notification(4, "placement", "Infosys Drive", "2025-06-24T11:00:00"),
    new Notification(5, "event", "Hackathon", "2025-06-21T10:00:00"),
    new Notification(6, "result", "Internal Marks", "2025-06-23T12:00:00"),
    new Notification(7, "placement", "Wipro Recruitment", "2025-06-24T08:00:00"),
    new Notification(8, "event", "Seminar", "2025-06-20T11:00:00"),
    new Notification(9, "placement", "Zoho Hiring", "2025-06-24T12:00:00"),
    new Notification(10, "result", "Lab Results", "2025-06-23T14:00:00"),
    new Notification(11, "event", "Coding Contest", "2025-06-24T09:00:00"),
    new Notification(12, "placement", "Amazon Hiring", "2025-06-24T13:00:00")
];

const top10 = getTop10Notifications(notifications);

console.log("Top 10 Priority Notifications");
console.table(top10);