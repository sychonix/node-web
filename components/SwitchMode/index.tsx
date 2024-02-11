'use client';

import React, { useEffect, useState } from 'react';
import { Switch, useMantineTheme, rem, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export function SwitchMode() {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(false);
  const { setColorScheme } = useMantineColorScheme();

  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  useEffect(() => {
    if (checked) {
      setColorScheme('dark');
    } else {
      setColorScheme('light');
    }
  }, [checked]);

  return (
    <Switch
      size="md"
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      color="dark.4"
      onLabel={sunIcon}
      offLabel={moonIcon}
    />
  );
}
