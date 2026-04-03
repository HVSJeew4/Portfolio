---
title: "How I Built a Vehicle Maintenance System Without IoT"
date: "2026-04-01"
tags: ["Power Apps", "System Design"]
excerpt: "A practical approach to building scalable maintenance tracking systems without IoT devices."
---

# The problem

Most maintenance conversations begin with a tooling assumption: if there are no sensors, then there is no reliable system. In practice, the business problem was not missing telemetry. It was missing operational discipline.

The team needed a way to track service history, upcoming maintenance, responsibility by vehicle, and the real cost of delays. Paper records and scattered spreadsheets made the process reactive. Vehicles were serviced after problems surfaced instead of before risk increased.

## Why common solutions fail

The first failure mode is over-scoping. A team asks for "smart maintenance" and gets pulled into hardware discussions, integration costs, and infrastructure they are not ready to support.

The second failure mode is under-design. A simple form gets built quickly, but it ignores state transitions, service categories, ownership, and reminder logic. The result is a logging tool, not an operating system for maintenance.

## My approach

I reframed the project around decision quality rather than device capability. The real question became: how can a team know what needs attention, when it matters, and who should act next?

That led to four design choices:

1. Make the vehicle the core entity, with a clean maintenance history attached.
2. Track maintenance plans separately from completed work so future schedules remain visible.
3. Use alerts and reminders as workflow triggers, not as cosmetic notifications.
4. Keep the system simple enough that operations teams would actually maintain the data.

## Implementation

The solution was built with Power Apps, Dataverse, and Power Automate.

- Power Apps handled the operational interface for vehicle records, maintenance entries, and review workflows.
- Dataverse stored the structured model for vehicles, schedules, service logs, and responsibility assignments.
- Power Automate monitored upcoming dates and generated reminders based on priority and timing.

The key implementation detail was separating event data from planning data. A completed oil change should not overwrite the maintenance plan itself. Instead, it should create a new historical event and update the next expected interval. That preserved reporting accuracy while keeping scheduling logic reliable.

```text
Vehicle -> Maintenance Plan -> Maintenance Event -> Notification Workflow
```

## Lessons learned

This project reinforced a pattern I keep seeing in business software: many teams do not need more technology first. They need better system boundaries.

Once the workflow is explicit, even a non-IoT solution can create strong operational visibility. The system succeeded because it reduced ambiguity, clarified ownership, and created a repeatable way to act before maintenance became a crisis.
