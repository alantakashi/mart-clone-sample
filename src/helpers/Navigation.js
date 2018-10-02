export const getDrawerNavigationOptions = (title, drawerIcon) => ({
  drawerLabel: title,
  drawerIcon
})

export const getStaticNavigationOptions = (title, backgroundColor, fontFamily, fontSize, color) => ({
  title,
  headerStyle: {
    backgroundColor
  },
  headerTitleStyle: {
    fontFamily,
    fontSize,
    color
  }
})

export const getNavigationOptions = (title, backgroundColor, color) => ({
  title,
  headerStyle: {
    backgroundColor
  },
  headerTitleStyle: {
    color
  },
  headerTintColor: color
})

export const getNavigationOptionsWithAction = (title, backgroundColor, color, headerLeft) => ({
  title,
  headerStyle: {
    backgroundColor
  },
  headerTitleStyle: {
    color
  },
  headerTintColor: color,
  headerLeft
})

export const getDrawerConfig = (drawerWidth, drawerPosition) => ({
  drawerWidth,
  drawerPosition
})
