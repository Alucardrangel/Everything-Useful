from dataclasses import dataclass
from secrets import choice
from django.shortcuts import render
from django.http.response import HttpResponse
from dataclasses import dataclass
@dataclass
class Team:
    team_name: str
    desc: str
    members:list
team={
   "management" :Team("Management Team","Management team is here to support the community of Base Camp Coding Academy. If we as a team need help then management can step in and assist. Overall, we lend help and support when help and support is needed.", ["Kevin Ramos", "Errin", "Brooks", "Chevy","Lukas", "Andrew"]),
    "documentation":Team("Documentation Team", "Documentation team is in charge of keeping tabs of what is going on here at base camp and informing our followers on day to day activities and projects. Doc team this year will also be in charge of completing the newsletter to go out to the community as well as putting together a yearbook to celebrate the class of 2023. Follow and like our Facebook, Twitter, and Linkedin to see what the doc team will be posting!", ["Antonio", "Cannon, Isaiah", "Cooper", "Gabbi", "Colt", "Angela"]),
    "procurement":Team("Procurement Team", "The goal of the procurement team is to acquire the ingredients to make a lunch for all those at Base Camp, whilst learning what it means to budget and be responsible in the kitchen. Weekly we go grocery shopping based on a compiled list of items discussed with each member of Base Camp. We strive to make sure everyone's needs and wants are met when it comes to the food prep.", ["Zaul", "Anna", "Mike", "Dylan", "Luke", "River"]),
    "community":Team("Community Team", "Community team's goal is to build up base camp as a community and bring everyone closer together. We are responsible for bi-weekly events for the class as well as that we are responsible for making plans to celebrate birthdays. So in general we for the lack of a better term make base camp feel like a community.", ["Eric", "Amber", "JW Petit", "Malcolm Johnson", "Joshua Griffin"]),
}



def list_lt(request):
    return render(request,"list.html") 




def start(request, name):
    choice = team[name]

    context = {
        "team_name": choice.team_name,
        "desc": choice.desc,
        "members": choice.members
    }
    return render(request,"team_details.html",context) 


