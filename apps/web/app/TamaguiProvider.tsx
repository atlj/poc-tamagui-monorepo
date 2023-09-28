'use client'

import '@tamagui/core/reset.css'
import '@tamagui/polyfill-dev'

import { useServerInsertedHTML } from 'next/navigation'
import React from 'react'

global.React = React
import { StyleSheet } from 'react-native'
import {Provider} from "ui"

import Tamagui from '../tamagui.config'
import appConfig from '../tamagui.config'

export const TamaguiProvider = ({ children }: { children: React.ReactNode }) => {

  useServerInsertedHTML(() => {
    // @ts-ignore
    const rnwStyle = StyleSheet.getSheet()
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: rnwStyle.textContent }} id={rnwStyle.id} />
        <style
          dangerouslySetInnerHTML={{
            __html: Tamagui.getCSS({
              // if you are using "outputCSS" option, you should use this "exclude"
              // if not, then you can leave the option out
              exclude: process.env.NODE_ENV === 'production' ? 'design-system' : null,
            }),
          }}
        />
      </>
    )
  })

  return (
      <Provider config={appConfig}>
        {children}
      </Provider>
  )
}
