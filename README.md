# Caching
>Caching is a simple Backend Application built using NodeJS which implements simple caching using Redis, an in memory database.

It fetches a list of all rockets currently used by Spacex using the SpaceX when the following end point is hit:
```
http://localhost:8080/rockets/all

```
<hr/>
Initially the the time taken to retrieve the data from the SpaceX api is quite a lot. <br/>
We then cache this data in Redis. 
 
 <img src="https://github.com/furher023/caching/blob/master/ScreenShots/Screenshot%202021-11-21%20at%206.36.26%20PM.png" />

<hr/>

Upon the initial request Redis database is updated with the values and the data is cached, which results in much faster
loading time in subsequent requests until the expiration time of the data cached.

 <img src="https://github.com/furher023/caching/blob/master/ScreenShots/Screenshot%202021-11-21%20at%206.43.24%20PM.png" />
