---
title: Directions and Routing
hide_title: false
hide_table_of_contents: false
sidebar_position: 4
---

As a key element in the MapsIndoors platform, we offer API's for effeciently calculating and displaying the most optimal routes from anywhere in the world to any Location inside a Building in MapsIndoors. In the case of travelling internally at a Venue, this calculation can be done on a local map provided by MapsIndoors. In the case of travelling between Venues or from outdoors to indoors, MapsIndoors provide a seamless journey outline from a specified *Origin* through automatically selected *Entry Points* at the edge of your Venues to the specified *destination*. See illustration below:

<img src="/img/directions/directions-with-entry-points.svg" alt="Illustration of how our directions work with entry points" width="900"/>

In order to provide a route between Venues, MapsIndoors integrate with external and global map providers. Our preferred provider is Google Maps.

The central components that utilize a Directions experience is the [Directions Service](directions-service) and the [Directions Renderer](directions-renderer). But before we get to the fun part, let's examine some key concepts first.

## Entry Points

Entry Points are specified points in a MapsIndoors Venue that enable a transition between a global or regional map and the local map in MapsIndoors. The Entry Point often specify which travel modes are suitable for entering/exiting the Venue. There are four travel modes: *Walking*, *Bicycling*, *Driving* and *Transit* (Public Transportation). As such, the Entry Point may be a bike shed for the Bicycling travel mode, a carpark for Driving and a bus stop for Transit. As a consequence, it is often at the Entry Point that the Travel Mode changes from Bicycling, Driving or Transit to Walking. The selection of an entry point for transitioning between route networks is based on a combination of automatic calculation, estimation and optimisation.

## The Route Model

When requesting Routes in MapsIndoors Directions Service The Route model in MapsIndoors is seperated into Legs and these Legs are again seperated into Steps.

### The Route Leg Model

A Leg represents a logical subset of the journey from Origin to Destination. A Route will break into Legs when:

* Travelling from one floor level to another.
* Changing context, such as entering or exiting a building.
* Changing travel mode, for example parking your car and continuing by foot.

If you examine the illustration above, you will see that the blue line representing the Route have been marked with blue circles where the Route would be seperated into Legs.

### The Route Step Model

A Route Step can have different representations depending on where on a Route it is placed. A Step may represent yet another subset of the journey within a Leg. Furthermore, it may represent a required action and/or maneuver, such as traversing floors, changing directions (Left, Right etc.). A step will also contain textual instructions. Examples include “Make a right turn”, “Continue straight ahead”, “Take the elevator to Floor 4” and the like.