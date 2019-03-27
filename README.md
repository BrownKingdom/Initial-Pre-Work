# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

My browser collects the information about the link and pings the server and checks if the link exist then connects it.

## From start to finish, how does data reach you to be rendered in the browser?

Information goes to the browser engine, figures what to display based on the search request.  Information from my computer is sent in packets, in bytes then put back together as to determine what language it is speaking whether html, css, js (tokens) so it can be display properly. Browsers open html files before anything else happens.  Then any styles that were created must be pushed through cssom to be readable.  Next the math needs to be computed to make sure that the size fit the way the designer intended. Then some render-block (but I do not know much about that).  Finally javascript has it's turn. When script is encountered it will stop all other processes until it is found.  Once my browser renders my html, css, & js, I can view my requested page.

## What code is rendered in the browser?

html

## What is the server-side code’s main function?

Designing websites so that the information requested is run on the originating server.

## What is the client-side code’s main function?

It is used to run scripts on the users computer. So, information I request is sent to my computer from the web's server.

## What is runtime?

The amount of time it takes a program to run, from opening to closing.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

I know that they are also referred to as static files and I believe it has to do with rendering a website.  Making it easier to reload and stores requested information.

## How many instances of the server-side code are available at any given time?

2? server processing and page postback.

## How many instances of the databases connected to the server application are created?

Multiple, connection required to send commands then receive information back. However, I am not fully familiar with the magic of the internet.  I did read a database connection article on Wikipedia.
