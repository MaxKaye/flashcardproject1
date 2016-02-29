# Project Feedback + Evaluation

Good job on completing Project 1.  While I enjoyed working with your subject matter and am happy to see a functional application, I did not see many of the practices that we extoll and practice in class.

## Project Workflow:

>Did you complete the user stories, wireframes, task tracking, and/or ERDs, as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?


**Does not meets expectations:**
Next time, please include helpful information in your readme.md file.  I almost missed the User Stories. These looked appropriate for your project.  

I see little evidence of the use of source control.  There are only 2 commits.  You have many obsolete/unused files in this directory.  There are 2 flashcard project repos on github.  Organizing your audio files into a separate "audio_resources" dir would make them easier to manage.

I can only assume that you spent valuable time working to get the audio portion working, which is listed under "Silver".  I recommend you get Bronze working and cleaned up, prior to moving on to "Silver".  Cleaning up as you go, is much easier.  You have a smaller amount of code and smaller problems to consolidate.


## Technical Requirements

>Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

**Does not meet Expectations:**
While you did have a functional flash card program, with the addition of audio support, there were too many missing basics.  All of your javascript was inline and did not include any DOM manipulation.  In the future, follow modern javascript guidelines and move these to a separate file.  Same for css.  There are a few opportunities for refactoring to reusable functions.  Next time, I recommend you spend more time on documentation, small commits, and reusable code, rather than copy/paste.


## Code Quality

>Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?

**Does not meet expectations:**
Your code is rife with duplication and unhelpful naming, with no option for   commenting.  I recommend formatting your code as you go along too.  It looks like you have started working on reducing duplication (flashcard.js), but this in-progress code belongs in a feature branch.

Make sure to take a look at the inline code comments I made in this [pull request](https://github.com/MaxKaye/flashcardproject1/pull/1/files).

## Problem Solving

>Are you able to defend why you implemented your solution in a certain way? Can you demonstrate that you thought through alternative implementations?

**Meets requirements:**
I see that you are working on reducing the duplication.
