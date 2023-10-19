import {Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger} from '@/components/ui/menubar'
import {themes} from '@/constants'
import {useTheme} from '@/context/ThemeProvider'
import Image from 'next/image'
import React from 'react'

const Theme = () => {
  const {mode, setMode} = useTheme()

  return (
    <Menubar className='relative border-none bg-transparent shadow-none'>
      <MenubarMenu>
        <MenubarTrigger className='focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200'>
          {mode === 'light' ? (
            <Image src={'/assets/icons/sun.svg'} alt='sun' width={20} height={20} className='active-theme'></Image>
          ) : (
            <Image src={'/assets/icons/moon.svg'} alt='moon' width={20} height={20} className='active-theme'></Image>
          )}
        </MenubarTrigger>

        <MenubarContent className='absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300'>
          {themes.map((theme) => (
            <MenubarItem
              className='flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400'
              key={theme.value}
              onClick={() => {
                setMode(theme.value)
                if (theme.value !== 'system') {
                  localStorage.theme = theme.value
                } else {
                  localStorage.removeItem('theme')
                }
              }}
            >
              <Image className={`${mode === theme.value && 'active-theme'}`} src={theme.icon} alt={theme.value} width={16} height={16} />
              <p className={`body-semibold ${mode === theme.value ? 'text-primary-500' : 'text-dark100_light900'}`}>{theme.label}</p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default Theme
