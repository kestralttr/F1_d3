# Formula One Statistics

My goal with this website was to utilizes d3.js, SVG, and Javascript to create unique, but intuitive data visualization.

## Initial Vision

I've always wanted to experiment more with d3.  To that effect, I wanted to limit the amount of text on this website, instead prodding users to closely examine the charts in order to extract the information visually stored there.

I like the idea of visualizing data in a fashion that makes the user feel like they are discovering the information, rather than just having it fed to them.  Regular bar graphs are simplistic and easy to read, but so very boring.  I was aiming to design charts that were more intriguing to the human eye.

## Top Speed Chart

Keeping with the theme, I thought it would be fun to create a chart shaped like a speedometer.  I accomplished this by utilizing the SVG circle element, as arcs are rather more complicated than they would be in HTML5 Canvas.

The speedometer consists of a group of concentric circles whose origin remains the same, but whose radius and stroke width differ respectively to their placement.  Using some basic trigonometry, I was able to dynamically calculate the correct value of the CSS stroke-offset property for each circle in order to create the effect that only a portion of the respective circumference is filled in.

After some color coordination and the addition of a static indicator needle, this chart was ready to display.

## Horsepower Chart

This chart is also powered by d3 and SVG.  The intended effect was to use a theme-appropriate image (in this case, a car engine) and fill it with colors, each one matching the horsepower rating of vehicle they represent.

The trick to achieving this effect was to first convert the negative space of a vector image of an engine into SVG format.  That way, I was able to overlay it on top of SVG rectangle elements which were aligned and arranged respective to the indicators to show how much horsepower each car has.

## Quarter Mile Interactive Chart

I wanted to make at least one interactive chart, so I decided to make a miniature drag race between the four cars we used previously.

I first attempted to used some form of CSS animation to bring about this effect, but using empty divs as rectangles left a bad taste in my mouth, so I swapped them out for SVG elements, which also scale dynamically for an all around better user experience.

By using Javascript to manipulate the width properties of the rectangle elements in appropriate increments, I was able to emulate the exact time it would take for each car to travel a quarter mile.  CSS animations would have allowed for an automatic ease in, which is more realistic to how a drag race would actually occur.  But I feel like the resizing capabilities of SVG make up for it.

After the animation was written and properly bound, I added some simple decorations and declared it finished.

## Future Considerations

One part of my vision which I haven't yet achieved is to animate each of the charts in and out of existence as the user scrolls down.  I haven't made up my mind how exactly I want the animation to happen, but once I do, I'll likely update that.

And since d3 is a lot of fun to work with, I'll keep thinking of new ideas for charts and add them as they come.
