---
title: Understanding memory latency
description: Memory latency is the time a computer waits for requested data to arrive.
---

**Memory latency** is the delay between asking for data and receiving it. Imagine a cook who needs one ingredient: a jar on the counter is quick to grab, while a trip to a distant pantry takes longer. Computers face a similar problem. A processor can work extremely quickly, but the data it needs may be waiting in memory.

Small, fast caches sit close to the processor and keep recently or frequently used information. If the requested data is in a cache, the wait is short. If not, the computer checks larger, slower levels, eventually reaching main memory. Each missed level adds delay. Storage drives hold far more data, but retrieving it generally takes much longer still.

Latency is different from **bandwidth**. Latency measures how long one request takes to begin returning data; bandwidth measures how much data can move over time. A wide highway has high bandwidth, but a long drive still has high latency. Both matter: games and interactive apps often feel sluggish when they repeatedly wait on small pieces of data, while video or scientific workloads may care more about sustained bandwidth. Good software and hardware try to keep needed data nearby and avoid unnecessary waits.

Latency is usually measured in tiny units such as nanoseconds, but small delays add up when a processor makes many dependent requests. If the next calculation cannot start until the current data arrives, the processor may sit idle. Designers reduce that waiting with caches, by fetching nearby data in advance, or by arranging programs to reuse data they already have. This is why a computer with a faster processor does not always feel faster: if its work is often stalled while memory responds, the processor’s peak speed is not the limiting factor.
