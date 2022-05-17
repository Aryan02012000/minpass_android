// Importing
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import WheelOfFortune from 'react-native-wheel-of-fortune';
import GlobalStyles from '../stylesheets/GlobalStyles';
import SpinWheelStyles from '../stylesheets/screens/SpinWheelStyles';
import Modal from 'react-native-modal';
import Colors from '../config/Colors';
import LottieView from 'lottie-react-native';
import FA5_Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {ThemeContextConsumer} from '../manager/ThemeManager';

// Constant
const participants = [0, 10, 20, 30, 40, 50]; // NOTE: Maximum 6 and Minimum 2 participants are recommended.

// Class component
class SpinWheel extends Component {
  // Class constructor
  constructor(props) {
    // Super method
    super(props);
    // Local states
    this.state = {
      winnerValue: null,
      winnerIndex: null,
      started: false,
      isModalVisible: false,
    };
    this.child = null;
  }

  // Method to spin the wheel
  buttonPress = () => {
    // Updating state
    this.setState({
      started: true,
    });
    this.child._onPress();
  };

  // Rendering
  render() {
    // Constant
    const wheelOptions = {
      rewards: participants,
      knobSize: scale(30),
      borderWidth: scale(5),
      borderColor: Colors.primary,
      innerRadius: scale(30),
      duration: 6000,
      backgroundColor: 'transparent',
      textAngle: 'horizontal',
      knobSource: require('../assets/images/knob.png'),
      onRef: ref => (this.child = ref),
    };

    // Returning
    return (
      <ThemeContextConsumer>
        {props => {
          return (
            <View
              style={[
                GlobalStyles.flexOneContainer,
                GlobalStyles.xyCenter,
                props.theme === 'light'
                  ? GlobalStyles.bgWhite
                  : GlobalStyles.bgSecondaryLight,
              ]}>
              <WheelOfFortune
                options={wheelOptions}
                getWinner={(value, index) => {
                  this.setState({
                    winnerValue: value,
                    winnerIndex: index,
                    isModalVisible: !this.state.isModalVisible,
                  });
                }}
              />
              {!this.state.started && (
                <View style={GlobalStyles.positionAbsolute}>
                  <TouchableOpacity
                    onPress={() => this.buttonPress()}
                    style={[
                      GlobalStyles.pHrTen,
                      GlobalStyles.pVrFive,
                      GlobalStyles.brdFive,
                      SpinWheelStyles.startButton,
                    ]}>
                    <Text
                      style={[
                        GlobalStyles.headingExtraExtraLarge,
                        GlobalStyles.textWhite,
                        GlobalStyles.openSansSemiBold,
                        GlobalStyles.textLetterSpacing,
                      ]}>
                      Spin to win!
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
              {this.state.winnerIndex != null && (
                <View>
                  <Modal
                    isVisible={this.state.isModalVisible}
                    backdropColor={Colors.secondaryLight}
                    backdropOpacity={0.9}
                    style={GlobalStyles.mTen}>
                    <View
                      style={[
                        props.theme === 'light'
                          ? GlobalStyles.bgWhite
                          : GlobalStyles.bgSecondary,
                        GlobalStyles.positionRelative,
                        GlobalStyles.brdTen,
                        GlobalStyles.pFifteen,
                        GlobalStyles.xyCenter,
                      ]}>
                      {this.state.winnerValue !== 0 ? (
                        <View style={GlobalStyles.xyCenter}>
                          <View style={GlobalStyles.lottieViewContainer}>
                            <LottieView
                              source={require('../assets/lottie/trophy-with-sprinkles.json')}
                              loop
                              autoPlay
                              resizeMode="cover"
                            />
                          </View>
                          <Text
                            style={[
                              GlobalStyles.paragraphMedium,
                              GlobalStyles.montserratSemiBold,
                              GlobalStyles.mtTen,
                              props.theme === 'light'
                                ? GlobalStyles.textDark
                                : GlobalStyles.textWhite,
                            ]}>
                            Many Congratulations!
                          </Text>
                          <Text
                            style={[
                              GlobalStyles.paragraphSmall,
                              GlobalStyles.openSansRegular,
                              GlobalStyles.mtFive,
                              props.theme === 'light'
                                ? GlobalStyles.textLight
                                : GlobalStyles.textDarkGrey,
                            ]}>
                            Hey Jhon,You have won
                          </Text>
                          <View
                            style={[
                              GlobalStyles.xyCenter,
                              GlobalStyles.flexRow,
                            ]}>
                            <FA5_Icon
                              name="rupee-sign"
                              size={scale(35)}
                              color={Colors.primary}
                            />
                            <Text
                              style={[
                                GlobalStyles.montserratSemiBold,
                                GlobalStyles.textPrimary,
                                SpinWheelStyles.winningValue,
                              ]}>
                              {this.state.winnerValue}
                            </Text>
                          </View>
                        </View>
                      ) : (
                        <View style={GlobalStyles.xyCenter}>
                          <View style={GlobalStyles.lottieViewContainer}>
                            <LottieView
                              source={require('../assets/lottie/sad-face.json')}
                              loop
                              autoPlay
                              resizeMode="cover"
                            />
                          </View>
                          <Text
                            style={[
                              GlobalStyles.paragraphMedium,
                              GlobalStyles.montserratSemiBold,
                              GlobalStyles.mtTen,
                              props.theme === 'light'
                                ? GlobalStyles.textDark
                                : GlobalStyles.textWhite,
                            ]}>
                            Oh Snap! Bad Luck
                          </Text>
                          <Text
                            style={[
                              GlobalStyles.paragraphSmall,
                              GlobalStyles.openSansRegular,
                              GlobalStyles.mtFive,
                              props.theme === 'light'
                                ? GlobalStyles.textLight
                                : GlobalStyles.textDarkGrey,
                            ]}>
                            Hey Jhon,Try Once Again Next Time
                          </Text>
                        </View>
                      )}
                      {/* Modal close icon */}
                      <View
                        style={[
                          GlobalStyles.positionAbsolute,
                          GlobalStyles.xyCenter,
                          GlobalStyles.brdFifteen,
                          GlobalStyles.modalCloseIconContainer,
                          props.theme === 'light'
                            ? GlobalStyles.bgPrimaryLightest
                            : GlobalStyles.bgSecondaryDarkest,
                        ]}>
                        <TouchableOpacity
                          onPress={() =>
                            this.setState({
                              isModalVisible: !this.state.isModalVisible,
                            })
                          }>
                          <MaterialIcon
                            name="close"
                            size={scale(20)}
                            color={Colors.primary}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Modal>
                </View>
              )}
            </View>
          );
        }}
      </ThemeContextConsumer>
    );
  }
}

// Exporting
export default SpinWheel;
