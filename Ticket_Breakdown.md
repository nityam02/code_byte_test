# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## Creating custom agent ID

### Description
Who : As a admin 

What :  I should be able to add support for custom agent Id

Why : Earlier the agentId were being generated dynamically by database now  we need custom Id  to better identify the agent

How : By creating a new function createAgentId to dynamically generate the agent Id

>  Story points: 5

What  is expected ?
- The task is regarding creating custom input agent function that will create the custom agentId
- The function should receive the Id based upon the Id it should  pre-append  '{companyname}-AgentId'
- The  edge cases like not receiving  the agentId and sanitization  of  the input should be done properly
- Sanitization function should  be there since Id can have  only numbers and  alphabets

## Changing 'getShiftsByFacility' to handle Custom Agent

### Description
Who : As a admin 

What :  I should be able to get the custom agent id

Why : To uniquely identify the agent

How : The return should make the  internal Db  call to faciliate the change

>  Story points: 3

What  is expected ?
- The task is regarding returing the custom Agent Id
- The  getShiftsByFacility should handling  by getting shifts with agentMetaData including custom Id

Points to remember
- Existing Functionality should not be hampared 



## Changing 'generateReport' to handle Custom Agent

### Description
Who : As a admin 

What :  I should be able to get the custom agent id  in  the report 

Why : The user should be able to distinguish between the agents easily

How : Iterate over each  and every  shift and check if the custom id is  present

>  Story points: 5

What  is expected ?
- The task is regarding returing the custom Agent Id  in the report
- The function should handle the case  when customId is not present.


Points to remember
- Existing functionality should not be hampared 




