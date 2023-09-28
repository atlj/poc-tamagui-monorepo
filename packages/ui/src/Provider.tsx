import React from 'react'
import {
    TamaguiProvider,
    TamaguiProviderProps
  } from 'tamagui'


export function Provider ({children, ...rest }: TamaguiProviderProps){
  return (
  <TamaguiProvider {...rest}>
    {children}
  </TamaguiProvider>
  )
  }
