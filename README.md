# BofA Assignment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Parameters

* Spend from 1 to 1.5 hours on assignment
* Use create-react-app with typescript template
* Push whatever is done after 1 to 1.5 hours
* Send url

## Description of assignment
* Build a button component based on visual example
* The component should be reusable

##Ambiguities in assignment
* All the examples show an icon on the right, though clearly not all require icons
* It appears from the design that there are two color schemes for the button primary and secondary
  and that these schemes are exemplified by the right and leftmost columns
* However in the center column there are two images,
    * the top one, unlabeled, exemplifies a primary button with different text and icon
    * the bottom one, is designated as a disabled state, though it is unclear as to whether
        * it is intended to be a disabled secondary button (matching button color, with lighter text)
        * or (less likely) intended as a disabled state for the primary button
* No mention of which style technology to assume, so I will have to pick one
* The presented styles are incoherent, in that:
    * an unfocused secondary button looks like a focused primary button
    * the "visual" language of focus is different for primary and secondary buttons


##Assumptions I am forced to make
* Picking styled-components for styles since they have the benefit keeping component together and not
  artificially dividing project along technology lines (using .css files)
* Initial style results should look significantly like visual example
* Forced to assume I should replicate the disabled appearance for the secondary button
* Force to invent a disabled appearance for the primary-themed button. There is no good choice here,
  since the exemplified style is actually a bad choice, primary buttons already appear disabled with
  the muted white text
* I feel compelled to provide a second set of styles that are more reasonable, where the distinction
  between enabled and disabled buttons is clearer without context to compare to.

  
##Choices I made
* Not enough time to reproduce every style, but the easy stuff like colors should be reproduced
* Have never done react components with typescript, and that would slow the process down

## I ran out of time, what I failed to get done:
* accessibility put in role aria-labelled-by attributes into the svg to get the svg equivalent of alt for images
* right justification of icons
* encapsulating the icons for things like size control
* getting the font sizes and colors, and focus styles "correct"