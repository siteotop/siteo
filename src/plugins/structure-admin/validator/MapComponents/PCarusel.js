//PageCarusel
export const PCs = {
  p/*_props*/: {
    //continuous
    a: 'readyPropBoolean',

    //cycle
    c: 'readyPropBoolean',

    //dark
    d: 'readyPropBoolean',

    //light
    l: 'readyPropBoolean',

    // height
    h: 'readyPropHeight',


    //hideDelimiterBackground
    b: 'readyPropBoolean',

    //ideDelimiters
    e: 'readyPropBoolean',

    //reverse
    r: 'readyPropBoolean',

    //vertical
    v: 'readyPropBoolean',

    //interval
    f: 'readyPropTime',

    //showArrows
    g: 'readyPropBoolean',

    //showArrowsOnHover
    j:  'readyPropBoolean',

  },
  c/*_class*/: ['background', 'elevation'],
  h/*_children*/: ['CSe']

}

//Carusel element
export const CSe = {
  p/*_props*/: {
    t: 'readyPropTransition',
    r: 'readyPropTransition',

  },

  d/*_data*/: {
    i: 'readyPropImage',
  },

  h/*_children*/: ['PLt', 'PSh']

}
