import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
declare type Props = React.ComponentPropsWithRef<typeof View> & {
    /**
     * Content of the `DataTable`.
     */
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
};
/**
 * Data tables allow displaying sets of data.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img src="screenshots/data-table.png" />
 *     <figcaption>Data table</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DataTable } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <DataTable>
 *     <DataTable.Header>
 *       <DataTable.Title>Dessert</DataTable.Title>
 *       <DataTable.Title numeric>Calories</DataTable.Title>
 *       <DataTable.Title numeric>Fat</DataTable.Title>
 *     </DataTable.Header>
 *
 *     <DataTable.Row>
 *       <DataTable.Cell>Frozen yogurt</DataTable.Cell>
 *       <DataTable.Cell numeric>159</DataTable.Cell>
 *       <DataTable.Cell numeric>6.0</DataTable.Cell>
 *     </DataTable.Row>
 *
 *     <DataTable.Row>
 *       <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
 *       <DataTable.Cell numeric>237</DataTable.Cell>
 *       <DataTable.Cell numeric>8.0</DataTable.Cell>
 *     </DataTable.Row>
 *
 *     <DataTable.Pagination
 *       page={1}
 *       numberOfPages={3}
 *       onPageChange={page => {
 *         console.log(page);
 *       }}
 *       label="1-2 of 6"
 *     />
 *   </DataTable>
 * );
 *
 * export default MyComponent;
 * ```
 */
declare const DataTable: {
    ({ children, style, ...rest }: Props): JSX.Element;
    Header: (React.ComponentClass<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ViewProps & React.RefAttributes<View> & {
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ children, style, theme, ...rest }: import("react-native").ViewProps & React.RefAttributes<View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ViewProps & React.RefAttributes<View> & {
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ children, style, theme, ...rest }: import("react-native").ViewProps & React.RefAttributes<View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ViewProps & React.RefAttributes<View> & {
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ children, style, theme, ...rest }: import("react-native").ViewProps & React.RefAttributes<View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ViewProps & React.RefAttributes<View> & {
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ children, style, theme, ...rest }: import("react-native").ViewProps & React.RefAttributes<View> & {
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>);
    Title: (React.ComponentClass<Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        children: React.ReactNode;
        numeric?: boolean | undefined;
        sortDirection?: "ascending" | "descending" | undefined;
        numberOfLines?: number | undefined;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "numeric" | "sortDirection"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        children: React.ReactNode;
        numeric?: boolean | undefined;
        sortDirection?: "ascending" | "descending" | undefined;
        numberOfLines?: number | undefined;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ numeric, children, onPress, sortDirection, theme, style, numberOfLines, ...rest }: import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
            children: React.ReactNode;
            numeric?: boolean | undefined;
            sortDirection?: "ascending" | "descending" | undefined;
            numberOfLines?: number | undefined;
            onPress?: (() => void) | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        children: React.ReactNode;
        numeric?: boolean | undefined;
        sortDirection?: "ascending" | "descending" | undefined;
        numberOfLines?: number | undefined;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ numeric, children, onPress, sortDirection, theme, style, numberOfLines, ...rest }: import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
            children: React.ReactNode;
            numeric?: boolean | undefined;
            sortDirection?: "ascending" | "descending" | undefined;
            numberOfLines?: number | undefined;
            onPress?: (() => void) | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        children: React.ReactNode;
        numeric?: boolean | undefined;
        sortDirection?: "ascending" | "descending" | undefined;
        numberOfLines?: number | undefined;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "numberOfLines" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "numeric" | "sortDirection"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        children: React.ReactNode;
        numeric?: boolean | undefined;
        sortDirection?: "ascending" | "descending" | undefined;
        numberOfLines?: number | undefined;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ numeric, children, onPress, sortDirection, theme, style, numberOfLines, ...rest }: import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
            children: React.ReactNode;
            numeric?: boolean | undefined;
            sortDirection?: "ascending" | "descending" | undefined;
            numberOfLines?: number | undefined;
            onPress?: (() => void) | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        children: React.ReactNode;
        numeric?: boolean | undefined;
        sortDirection?: "ascending" | "descending" | undefined;
        numberOfLines?: number | undefined;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ numeric, children, onPress, sortDirection, theme, style, numberOfLines, ...rest }: import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
            children: React.ReactNode;
            numeric?: boolean | undefined;
            sortDirection?: "ascending" | "descending" | undefined;
            numberOfLines?: number | undefined;
            onPress?: (() => void) | undefined;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>);
    Row: (React.ComponentClass<Pick<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        children: React.ReactNode;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        children: React.ReactNode;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & (({ onPress, style, theme, children, ...rest }: Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        children: React.ReactNode;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }) => JSX.Element)) | (React.FunctionComponent<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        children: React.ReactNode;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & (({ onPress, style, theme, children, ...rest }: Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        children: React.ReactNode;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }) => JSX.Element)), {}>) | (React.FunctionComponent<Pick<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        children: React.ReactNode;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        children: React.ReactNode;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & (({ onPress, style, theme, children, ...rest }: Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        children: React.ReactNode;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }) => JSX.Element)) | (React.FunctionComponent<Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        children: React.ReactNode;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & (({ onPress, style, theme, children, ...rest }: Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
        borderless?: boolean | undefined;
        background?: Object | undefined;
        centered?: boolean | undefined;
        disabled?: boolean | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        rippleColor?: string | undefined;
        underlayColor?: string | undefined;
        children: React.ReactNode;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }>, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
        children: React.ReactNode;
        onPress?: (() => void) | undefined;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }) => JSX.Element)), {}>);
    Cell: {
        ({ children, style, numeric, ...rest }: Pick<Pick<(Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
            borderless?: boolean | undefined;
            background?: Object | undefined;
            centered?: boolean | undefined;
            disabled?: boolean | undefined;
            onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
            onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
            rippleColor?: string | undefined;
            underlayColor?: string | undefined;
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }) | React.PropsWithChildren<Pick<import("react-native").TouchableWithoutFeedbackProps & React.RefAttributes<import("react-native").TouchableWithoutFeedback> & {
            borderless?: boolean | undefined;
            background?: Object | undefined;
            centered?: boolean | undefined;
            disabled?: boolean | undefined;
            onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
            onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
            rippleColor?: string | undefined;
            underlayColor?: string | undefined;
            children: React.ReactNode;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }, "ref" | "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
        }>, "style" | "children" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered">, "style" | "onLayout" | "onPress" | "onLongPress" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "key" | "disabled" | "hitSlop" | "hasTVPreferredFocus" | "tvParallaxProperties" | "theme" | "delayLongPress" | "delayPressIn" | "delayPressOut" | "onBlur" | "onFocus" | "onPressIn" | "onPressOut" | "pressRetentionOffset" | "background" | "borderless" | "rippleColor" | "underlayColor" | "centered"> & {
            children: React.ReactNode;
            numeric?: boolean | undefined;
            onPress?: (() => void) | undefined;
            style?: StyleProp<ViewStyle>;
        }): JSX.Element;
        displayName: string;
    };
    Pagination: (React.ComponentClass<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        page: number;
        numberOfPages: number;
        label?: React.ReactNode;
        onPageChange: (page: number) => void;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "label" | "style" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "page" | "numberOfPages" | "onPageChange"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }, any> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ViewProps & React.RefAttributes<View> & {
        page: number;
        numberOfPages: number;
        label?: React.ReactNode;
        onPageChange: (page: number) => void;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ label, page, numberOfPages, onPageChange, style, theme, ...rest }: import("react-native").ViewProps & React.RefAttributes<View> & {
            page: number;
            numberOfPages: number;
            label?: React.ReactNode;
            onPageChange: (page: number) => void;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ViewProps & React.RefAttributes<View> & {
        page: number;
        numberOfPages: number;
        label?: React.ReactNode;
        onPageChange: (page: number) => void;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ label, page, numberOfPages, onPageChange, style, theme, ...rest }: import("react-native").ViewProps & React.RefAttributes<View> & {
            page: number;
            numberOfPages: number;
            label?: React.ReactNode;
            onPageChange: (page: number) => void;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>) | (React.FunctionComponent<Pick<import("react-native").ViewProps & React.RefAttributes<View> & {
        page: number;
        numberOfPages: number;
        label?: React.ReactNode;
        onPageChange: (page: number) => void;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, "ref" | "label" | "style" | "onLayout" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "pointerEvents" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "page" | "numberOfPages" | "onPageChange"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<ReactNativePaper.Theme> | undefined;
    }> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<(React.ComponentClass<import("react-native").ViewProps & React.RefAttributes<View> & {
        page: number;
        numberOfPages: number;
        label?: React.ReactNode;
        onPageChange: (page: number) => void;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }, any> & {
        ({ label, page, numberOfPages, onPageChange, style, theme, ...rest }: import("react-native").ViewProps & React.RefAttributes<View> & {
            page: number;
            numberOfPages: number;
            label?: React.ReactNode;
            onPageChange: (page: number) => void;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }) | (React.FunctionComponent<import("react-native").ViewProps & React.RefAttributes<View> & {
        page: number;
        numberOfPages: number;
        label?: React.ReactNode;
        onPageChange: (page: number) => void;
        style?: StyleProp<ViewStyle>;
        theme: ReactNativePaper.Theme;
    }> & {
        ({ label, page, numberOfPages, onPageChange, style, theme, ...rest }: import("react-native").ViewProps & React.RefAttributes<View> & {
            page: number;
            numberOfPages: number;
            label?: React.ReactNode;
            onPageChange: (page: number) => void;
            style?: StyleProp<ViewStyle>;
            theme: ReactNativePaper.Theme;
        }): JSX.Element;
        displayName: string;
    }), {}>);
};
export default DataTable;
