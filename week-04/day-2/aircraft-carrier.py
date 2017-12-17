class Aircraft():
    def __init__(self):
        self.present = True
    
    def alive(self):
        return self.present

''' 
There are 2 types of aircrafts: `F16` and `F35`


Both aircraft should track how many ammo it has


### F16
 - Max ammo: 8
 - Base damage: 30

### F35
 - Max ammo: 12
 - Base damage: 50

All the aircrafts should be created with empty ammo store

### Methods:

#### fight
- It should use all the ammos (set it to 0) and it should return the damage it deals
- The damage is the multiplication of the base damage and the ammos

#### refill
- It should take a number as parameter and substract as much ammo as possibe
- It can't have more ammo than the number or the max ammo
- It should return the remaining ammo
- Eg. Filling an empty F35 with `300` would completely fill the storage of the aircraft and would return the remaining `288`

#### getType
- It should return it's type as a string

#### getStatus
- It should return a string like: `Type F35, Ammo: 10, Base Damage: 50, All Damage: 500`

## Carrier
Create a class that represents an aircraft-carrier


- The carrier should be able to store aircrafts
- Each carrier should have a store of ammo represented as number
- The inital ammo should be given by a parameter in it's constructor
- The carrier also has a health point given in it's constructor as well

### Methods:


#### addAircraft
- It should take a string as the type of the aircraft (`F16` / `F35`) and add a new aircraft to its store

#### fill
- It should fill all the aircraft with ammo and substract the needed ammo from the ammo storage
- If there is not enough ammo than it should start to fill the `F35` types first
- If there is no ammo when this method is called it should throw an exception

#### fight
- It should take another carrier as a refrence parameter and fire all the ammo from the aircrafts to it, than substract all the damage from it's health points

#### getStatus
It should give back a string about it's and all of its aircrafts status like:
```
HP: 5000, Aircraft count: 4, Ammo Storage: 2300, Total damage: 2280
Aircrafts:
Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
```
If the health points are 0 than it should give back: `It's dead Jim :(` '''