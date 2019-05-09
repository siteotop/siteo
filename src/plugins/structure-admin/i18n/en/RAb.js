

//RootToolbar
export const RAb = {
  t: 'App bar',
  d: 'Toolbar for app (RootToolbar)',
  helperProps: {

    h: {
      t: 'height',
      d: 'Designates a specific height for the toolbar'
    },

    d: {
      t: 'Dark',
      d: 'Positions the toolbar offset from an application VDrawer'
    },

    l: {
      t: 'clipped-left',
      d: 'Designates that the applications <Drawer> is clipped on the left side of the toolbar'
    },

    r: {
      t: 'clipped-right',
      d: 'Designates that the applications <Drawer> is clipped on the right side of the toolbar'
    },

    e: {
      t: 'dense',
      d: 'Reduces the height of the toolbar content and extension'
    },

    c: {
      t: 'Color',
      d: 'Background color'
    },


  }
}

//toolbar title
export const TTl = {
  t: 'Title',
  d: 'Website title',
}
// toolbar toogle
export const TTg = {
  t: 'Toogle',
  d: 'Toogle for <Drawer>',
}


export const PTr = {
  t: 'Toolbar',
  d: 'Toolbar for <card> or <drawer>',
  helperProps: RAb.helperProps
}