import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useRef } from 'react'
import styles from './../Views/MainScreenstyles';
const Mainscreen = () => {
    const [value, setValue] = useState('0')
    const [bracketopen, setBracketOpen] = useState(false)
    const scrollViewRef = useRef();
    const handlePress = (val) => {
        console.log('pressed', val)
        if (val == 'AC') {
            setValue('0')
        }
        else if (val == '=') {
            try {
                if ((value.match(/\(/g) || []).length == (value.match(/\)/g) || []).length) {

                    if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/') {
                        setValue(`${eval(value.replace('()', '(0)').slice(0, -1))}`)
                    }
                    else {
                        setValue(`${eval(value.replace('()', '(0)') + '*1')}`)
                    }
                }
            }
            catch (e) {
                setValue('Format error')
            }
        }
        else if (val == 'back') {
            setValue(value.slice(0, -1))
        }
        else if (val == '()') {
            if (value == '0') {
                setValue('(')
                setBracketOpen(true)
            }
            else if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/' || value.slice(-1) == '%' || value.slice(-1) == '.') {
                setValue(value + '(')
                setBracketOpen(true)
            }
            else {
                if (bracketopen == true) {
                    setValue(value + ')')
                    setBracketOpen(false)
                }
                else {
                    setValue(value + '(')
                    setBracketOpen(true)
                }
            }
        }
        else {
            if (value == '0') {
                if (val == '+' || val == '-' || val == '*' || val == '/' || val == '%' || val == '.') {
                    setValue(value + val)
                }
                else {
                    setValue(val)
                }
            }
            else if (isNaN(val)) {
                console.log(value.slice(-1))
                if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/' || value.slice(-1) == '%' || value.slice(-1) == '.') {
                    setValue(value.slice(0, -1) + val)
                }
                else {
                    setValue(value + val)
                }
            }
            else if (!isNaN(val)) {
                setValue(value + val)
            }
        }
    }
    return (
        <View style={styles.main_screen}>
            <ScrollView style={styles.main_screen_display}
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
                <Text style={styles.display_text}>{value}</Text>
            </ScrollView>
            <View style={styles.main_screen_keypad}>
                <View style={styles.keypadrow}>
                    <Pressable onPress={() => handlePress('AC')} >
                        <View style={styles.btn_ac}>
                            <Text style={styles.btn_text} >AC</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('()')} >
                        <View style={styles.btn1_} >
                            <Text style={styles.btn_text}>( )</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('%')} >
                        <View style={styles.btn1_}>
                            <Text style={styles.btn_text} >%</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('/')}>
                        <View style={styles.btn1_}>
                            <Text style={styles.btn_text} >/</Text>
                        </View>
                    </Pressable>
                </View>
            </View>

            <View style={styles.keypadrow}>
                <Pressable onPress={() => handlePress('7')}>
                    <View style={styles.btn1_outer}>
                        <Text style={styles.bg1_btn}>7</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => handlePress('8')}>
                    <View style={styles.btn1_outer}>
                        <Text style={styles.bg1_btn}>8</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => handlePress('9')}>
                    <View style={styles.btn1_outer}>
                        <Text style={styles.bg1_btn}>9</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => handlePress('-')}>
                    <View style={styles.btn1_}>
                        <Text style={styles.star} >-</Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.keypadrow}>
                <Pressable onPress={() => handlePress('4')}>
                    <View style={styles.btn1_outer}>
                        <Text style={styles.bg1_btn}>4</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => handlePress('5')}>
                    <View style={styles.btn1_outer}>
                        <Text style={styles.bg1_btn}>5</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => handlePress('6')}>
                    <View style={styles.btn1_outer}>
                        <Text style={styles.bg1_btn}>6</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => handlePress('+')}>
                    <View style={styles.btn1_}>
                        <Text style={styles.star} >+</Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.keypadrow}>
                <Pressable onPress={() => handlePress('1')}>
                    <View style={styles.btn1_outer}>
                        <Text style={styles.bg1_btn}>1</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => handlePress('2')}>
                    <View style={styles.btn1_outer}>
                        <Text style={styles.bg1_btn}>2</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => handlePress('3')}>
                    <View style={styles.btn1_outer}>
                        <Text style={styles.bg1_btn}>3</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => handlePress('*')}>
                    <View style={styles.btn1_} >
                        <Text style={styles.star}  >*</Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.keypadrow}>
                <Pressable onPress={() => handlePress('0')}>
                    <View style={styles.btn1_outer}>
                        <Text style={styles.bg1_btn}>0</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => handlePress('.')}>
                    <View style={styles.btn1_outer}>
                        <Text style={styles.bg1_btn}>.</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => handlePress('back')}>
                    <View style={styles.btn_ac}>
                        <Text style={styles.btn_text}>C</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => handlePress('=')}>
                    <View style={styles.btn1_}>
                        <Text style={styles.star}  >=</Text>
                    </View>
                </Pressable>
            </View>
        </View>

    )
}

export default Mainscreen
