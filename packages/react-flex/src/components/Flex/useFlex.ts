import * as React from 'react';
import { FlexProps, FlexState } from './Flex.types';
import { ComposePreparedOptions } from '@fluentui/react-compose';
import { getStyleFromPropsAndOptions } from '../../tmp/getStyleFromPropsAndOptions';

export const useFlex = (props: FlexProps, ref: React.Ref<HTMLElement>, options: ComposePreparedOptions): FlexState => {
  return {
    ...props,
    style: getStyleFromPropsAndOptions(props, options, '--flex'),
  };
};
