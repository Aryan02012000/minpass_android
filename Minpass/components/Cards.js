// Importing
import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import ProductCardsStyles from '../stylesheets/components/ProductCardsStyles';
import ProductListCardStyles from '../stylesheets/components/ProductListCardStyles';
import ReviewCardStyles from '../stylesheets/components/ReviewCardStyles';
import OrderedItemCardStyles from '../stylesheets/components/OrderedItemCardStyles';
import GlobalStyles from '../stylesheets/GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import {scale} from 'react-native-size-matters';
import Colors from '../config/Colors';
import {ButtonWithIcon} from '../components/Buttons';
import shadow from './Shadow';
import {ThemeContext} from '../manager/ThemeManager';

// Sizes constants
const SIZE_15 = scale(15);
const SIZE_20 = scale(20);
const SIZE_25 = scale(25);

// Functional components

// Product card(Grid view)
const ProductCard = ({
  id,
  badgeLabel,
  addedInWishlist,
  photo,
  title,
  overallRating,
  price,
  onPressHeart,
  onPressItem,
  onPressAdd,
  shadowValue,
}) => {
  // Getting values from theme context provider
  const {theme} = useContext(ThemeContext);

  // Returning
  return (
    <Pressable
      key={id}
      style={[
        theme === 'light'
          ? GlobalStyles.bgWhite
          : GlobalStyles.bgSecondaryDarkest,
        GlobalStyles.pTen,
        GlobalStyles.brdFive,
        GlobalStyles.justifyContentCenter,
        ProductCardsStyles.itemContainer,
        theme === 'light' ? GlobalStyles.brLightGrey : GlobalStyles.brDarkGrey,
        {...shadow(scale(shadowValue), Colors.shadowDark)},
      ]}
      onPress={onPressItem}>
      {/* Header */}
      <View
        style={[GlobalStyles.flexRow, GlobalStyles.justifyContentSpaceBetween]}>
        {badgeLabel !== null ? (
          <View
            style={[
              GlobalStyles.xyCenter,
              GlobalStyles.bgPrimaryLightest,
              ProductCardsStyles.badge,
            ]}>
            <Text
              style={[
                GlobalStyles.paragraphExtraSmall,
                GlobalStyles.openSansSemiBold,
                GlobalStyles.textLetterSpacing,
                GlobalStyles.textCapitalize,
                GlobalStyles.textPrimary,
              ]}>
              {badgeLabel}
            </Text>
          </View>
        ) : (
          <View></View>
        )}

        {addedInWishlist ? (
          <TouchableOpacity onPress={onPressHeart}>
            <Icon name="heart" size={SIZE_25} color={Colors.red} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onPressHeart}>
            <Icon name="heart-outline" size={SIZE_25} color={Colors.darkGrey} />
          </TouchableOpacity>
        )}
      </View>
      {/* Photo */}
      <View
        style={[
          GlobalStyles.pTen,
          GlobalStyles.alignSelfCenter,
          ProductCardsStyles.photoContainer,
        ]}>
        <Image source={photo} style={GlobalStyles.imageResponsive} />
      </View>
      {/* Footer */}
      <View>
        <Text
          style={[
            GlobalStyles.paragraphSmall,
            GlobalStyles.openSansSemiBold,
            GlobalStyles.textLetterSpacing,
            GlobalStyles.textCapitalize,
            theme === 'light' ? GlobalStyles.textDark : GlobalStyles.textWhite,
          ]}>
          {title}
        </Text>
        {overallRating === 1 ? (
          <Icon
            name="star-sharp"
            size={SIZE_15}
            style={GlobalStyles.textWarning}
          />
        ) : overallRating === 1.5 ? (
          <View style={[GlobalStyles.flexRow, GlobalStyles.mVrFive]}>
            <Icon
              name="star-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
            <Icon
              name="star-half-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
          </View>
        ) : overallRating === 2 ? (
          <View style={[GlobalStyles.flexRow, GlobalStyles.mVrFive]}>
            <Icon
              name="star-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
            <Icon
              name="star-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
          </View>
        ) : overallRating === 2.5 ? (
          <View style={[GlobalStyles.flexRow, GlobalStyles.mVrFive]}>
            <Icon
              name="star-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
            <Icon
              name="star-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
            <Icon
              name="star-half-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
          </View>
        ) : overallRating === 3 ? (
          <View style={[GlobalStyles.flexRow, GlobalStyles.mVrFive]}>
            <Icon
              name="star-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
            <Icon
              name="star-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
            <Icon
              name="star-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
          </View>
        ) : overallRating === 3.5 ? (
          <View style={[GlobalStyles.flexRow, GlobalStyles.mVrFive]}>
            <Icon
              name="star-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
            <Icon
              name="star-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
            <Icon
              name="star-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
            <Icon
              name="star-half-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
          </View>
        ) : overallRating === 4 ? (
          <View style={[GlobalStyles.flexRow, GlobalStyles.mVrFive]}>
            <Icon
              name="star-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
            <Icon
              name="star-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
            <Icon
              name="star-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
            <Icon
              name="star-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
          </View>
        ) : overallRating === 4.5 ? (
          <View style={[GlobalStyles.flexRow, GlobalStyles.mVrFive]}>
            <Icon
              name="star-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
            <Icon
              name="star-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
            <Icon
              name="star-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
            <Icon
              name="star-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
            <Icon
              name="star-half-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
          </View>
        ) : overallRating === 5 ? (
          <View style={[GlobalStyles.flexRow, GlobalStyles.mVrFive]}>
            <Icon
              name="star-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
            <Icon
              name="star-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
            <Icon
              name="star-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
            <Icon
              name="star-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
            <Icon
              name="star-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
          </View>
        ) : null}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={[
              GlobalStyles.paragraphLarge,
              GlobalStyles.openSansSemiBold,
              GlobalStyles.textPrimary,
              GlobalStyles.textLetterSpacing,
            ]}>
            ${price.toFixed(2)}
          </Text>
          <ButtonWithIcon
            iconName="add"
            iconSize={SIZE_20}
            iconColor={Colors.white}
            customButtonStyle={[
              GlobalStyles.mVrZero,
              GlobalStyles.bgPrimary,
              GlobalStyles.brdForty,
              ProductCardsStyles.addButton,
            ]}
            onPress={onPressAdd}
          />
        </View>
      </View>
    </Pressable>
  );
};

// Product list(List view)
const ProductList = ({
  id,
  index,
  addedInWishlist,
  photo,
  title,
  overallRating,
  price,
  onPressHeart,
  onPressItem,
  onPressAdd,
}) => {
  // Getting values from theme context provider
  const {theme} = useContext(ThemeContext);

  // Returning
  return (
    <Pressable
      key={id}
      style={[
        theme === 'light'
          ? GlobalStyles.bgWhite
          : GlobalStyles.bgSecondaryDarkest,
        GlobalStyles.brdFive,
        GlobalStyles.pTen,
        GlobalStyles.flexRow,
        GlobalStyles.justifyContentSpaceBetween,
        GlobalStyles.mHrFifteen,
        GlobalStyles.mbFifteen,
        ProductListCardStyles.itemContainer,
        theme === 'light' ? GlobalStyles.brWhite : GlobalStyles.brDarkGrey,
        {marginTop: index === 0 ? 15 : 0},
      ]}
      onPress={onPressItem}>
      <View
        style={[
          GlobalStyles.pFive,
          GlobalStyles.brdFive,
          theme === 'light' ? GlobalStyles.bgGrey : GlobalStyles.bgSecondary,
          ProductListCardStyles.photoContainer,
        ]}>
        <Image source={photo} style={GlobalStyles.imageResponsive} />
      </View>
      <View
        style={[
          GlobalStyles.flexOneContainer,
          GlobalStyles.plTen,
          GlobalStyles.justifyContentSpaceBetween,
        ]}>
        <View
          style={[
            GlobalStyles.flexRow,
            GlobalStyles.justifyContentSpaceBetween,
          ]}>
          <View>
            <Text
              style={[
                GlobalStyles.paragraphSmall,
                GlobalStyles.openSansSemiBold,
                GlobalStyles.textLetterSpacing,
                GlobalStyles.textCapitalize,
                theme === 'light'
                  ? GlobalStyles.textDark
                  : GlobalStyles.textWhite,
              ]}>
              {title}
            </Text>
            {overallRating === 1 ? (
              <Icon
                name="star-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
            ) : overallRating === 1.5 ? (
              <View style={GlobalStyles.flexRow}>
                <Icon
                  name="star-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
                <Icon
                  name="star-half-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
              </View>
            ) : overallRating === 2 ? (
              <View style={GlobalStyles.flexRow}>
                <Icon
                  name="star-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
                <Icon
                  name="star-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
              </View>
            ) : overallRating === 2.5 ? (
              <View style={GlobalStyles.flexRow}>
                <Icon
                  name="star-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
                <Icon
                  name="star-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
                <Icon
                  name="star-half-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
              </View>
            ) : overallRating === 3 ? (
              <View style={GlobalStyles.flexRow}>
                <Icon
                  name="star-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
                <Icon
                  name="star-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
                <Icon
                  name="star-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
              </View>
            ) : overallRating === 3.5 ? (
              <View style={GlobalStyles.flexRow}>
                <Icon
                  name="star-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
                <Icon
                  name="star-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
                <Icon
                  name="star-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
                <Icon
                  name="star-half-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
              </View>
            ) : overallRating === 4 ? (
              <View style={GlobalStyles.flexRow}>
                <Icon
                  name="star-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
                <Icon
                  name="star-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
                <Icon
                  name="star-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
                <Icon
                  name="star-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
              </View>
            ) : overallRating === 4.5 ? (
              <View style={GlobalStyles.flexRow}>
                <Icon
                  name="star-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
                <Icon
                  name="star-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
                <Icon
                  name="star-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
                <Icon
                  name="star-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
                <Icon
                  name="star-half-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
              </View>
            ) : overallRating === 5 ? (
              <View style={GlobalStyles.flexRow}>
                <Icon
                  name="star-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
                <Icon
                  name="star-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
                <Icon
                  name="star-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
                <Icon
                  name="star-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
                <Icon
                  name="star-sharp"
                  size={SIZE_15}
                  style={GlobalStyles.textWarning}
                />
              </View>
            ) : null}
          </View>
          {addedInWishlist ? (
            <TouchableOpacity>
              <Icon
                name="heart"
                size={SIZE_25}
                color={Colors.red}
                onPress={onPressHeart}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Icon
                name="heart-outline"
                size={SIZE_25}
                color={Colors.darkGrey}
                onPress={onPressHeart}
              />
            </TouchableOpacity>
          )}
        </View>

        {/* Item footer */}
        <View
          style={[
            GlobalStyles.flexRow,
            GlobalStyles.alignItemsCenter,
            GlobalStyles.justifyContentSpaceBetween,
          ]}>
          <Text
            style={[
              GlobalStyles.paragraphLarge,
              GlobalStyles.openSansSemiBold,
              GlobalStyles.textLetterSpacing,
              GlobalStyles.textPrimary,
            ]}>
            ${price.toFixed(2)}
          </Text>
          <ButtonWithIcon
            iconName="add"
            iconSize={SIZE_20}
            iconColor={Colors.white}
            customButtonStyle={[
              GlobalStyles.mVrZero,
              GlobalStyles.bgPrimary,
              GlobalStyles.brdForty,
              ProductListCardStyles.addButton,
            ]}
            onPress={onPressAdd}
          />
        </View>
      </View>
    </Pressable>
  );
};

// Product review card
const ProductReviewCard = ({
  id,
  index,
  overallRating,
  reviewAge,
  reviewTitle,
  review,
  reviewerImage,
  reviewerName,
  reviewerDesignation,
}) => {
  // Getting values from theme context provider
  const {theme} = useContext(ThemeContext);

  // Returning
  return (
    <View
      key={id}
      style={[
        theme === 'light'
          ? GlobalStyles.bgWhite
          : GlobalStyles.bgSecondaryDarkest,
        GlobalStyles.pTen,
        GlobalStyles.mHrFifteen,
        GlobalStyles.mbFifteen,
        GlobalStyles.brdFive,
        ReviewCardStyles.reviewContainer,
        {marginTop: index === 0 ? 15 : 0},
      ]}>
      <View style={[GlobalStyles.flexRow, GlobalStyles.alignItemsCenter]}>
        <Text
          style={[
            GlobalStyles.headingExtraLarge,
            GlobalStyles.openSansSemiBold,
            GlobalStyles.textPrimary,
            GlobalStyles.textLetterSpacing,
            GlobalStyles.mrTen,
          ]}>
          {overallRating.toFixed(1)}
        </Text>
        <View>
          {overallRating === 1 ? (
            <Icon
              name="star-sharp"
              size={SIZE_15}
              style={GlobalStyles.textWarning}
            />
          ) : overallRating === 1.5 ? (
            <View style={GlobalStyles.flexRow}>
              <Icon
                name="star-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
              <Icon
                name="star-half-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
            </View>
          ) : overallRating === 2 ? (
            <View style={GlobalStyles.flexRow}>
              <Icon
                name="star-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
              <Icon
                name="star-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
            </View>
          ) : overallRating === 2.5 ? (
            <View style={GlobalStyles.flexRow}>
              <Icon
                name="star-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
              <Icon
                name="star-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
              <Icon
                name="star-half-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
            </View>
          ) : overallRating === 3 ? (
            <View style={GlobalStyles.flexRow}>
              <Icon
                name="star-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
              <Icon
                name="star-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
              <Icon
                name="star-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
            </View>
          ) : overallRating === 3.5 ? (
            <View style={GlobalStyles.flexRow}>
              <Icon
                name="star-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
              <Icon
                name="star-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
              <Icon
                name="star-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
              <Icon
                name="star-half-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
            </View>
          ) : overallRating === 4 ? (
            <View style={GlobalStyles.flexRow}>
              <Icon
                name="star-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
              <Icon
                name="star-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
              <Icon
                name="star-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
              <Icon
                name="star-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
            </View>
          ) : overallRating === 4.5 ? (
            <View style={GlobalStyles.flexRow}>
              <Icon
                name="star-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
              <Icon
                name="star-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
              <Icon
                name="star-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
              <Icon
                name="star-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
              <Icon
                name="star-half-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
            </View>
          ) : overallRating === 5 ? (
            <View style={GlobalStyles.flexRow}>
              <Icon
                name="star-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
              <Icon
                name="star-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
              <Icon
                name="star-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
              <Icon
                name="star-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
              <Icon
                name="star-sharp"
                size={SIZE_15}
                style={GlobalStyles.textWarning}
              />
            </View>
          ) : null}
          <Text
            style={[
              GlobalStyles.paragraphExtraSmall,
              GlobalStyles.openSansRegular,
              GlobalStyles.textLetterSpacing,
              theme === 'light'
                ? GlobalStyles.textLight
                : GlobalStyles.textPink,
            ]}>
            {reviewAge}
          </Text>
        </View>
      </View>
      <Text
        style={[
          GlobalStyles.paragraphMedium,
          GlobalStyles.openSansSemiBold,
          GlobalStyles.textLetterSpacing,
          GlobalStyles.textCapitalize,
          GlobalStyles.mVrFive,
          theme === 'light' ? GlobalStyles.textDark : GlobalStyles.textWhite,
        ]}>
        {reviewTitle}
      </Text>
      <Text
        style={[
          GlobalStyles.paragraphSmall,
          GlobalStyles.openSansRegular,
          GlobalStyles.textLetterSpacing,
          GlobalStyles.mbFifteen,
          theme === 'light' ? GlobalStyles.textLight : GlobalStyles.textWhite,
        ]}>
        {review}
      </Text>
      <View
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.alignItemsCenter,
          GlobalStyles.mbFive,
        ]}>
        <View
          style={[
            GlobalStyles.brdTwenty,
            GlobalStyles.overFlowHidden,
            GlobalStyles.mrTen,
            ReviewCardStyles.reviewerImage,
          ]}>
          <Image source={reviewerImage} style={GlobalStyles.imageResponsive} />
        </View>
        <View>
          <Text
            style={[
              GlobalStyles.paragraphSmall,
              GlobalStyles.montserratSemiBold,
              GlobalStyles.textLetterSpacing,
              theme === 'light'
                ? GlobalStyles.textDark
                : GlobalStyles.textWhite,
            ]}>
            {reviewerName}
          </Text>
          <Text
            style={[
              GlobalStyles.paragraphExtraSmall,
              GlobalStyles.openSansSemiBold,
              GlobalStyles.textLetterSpacing,
              GlobalStyles.textPrimary,
              GlobalStyles.textCapitalize,
            ]}>
            {reviewerDesignation}
          </Text>
        </View>
      </View>
    </View>
  );
};

// Ordered item card
const OrderedItemCard = ({
  index,
  orderId,
  orderDate,
  deliveryDate,
  orderFrom,
  deliverTo,
  itemPhoto,
  itemTitle,
  itemShortDetails,
  itemPrice,
  orderStatus,
  onPress,
}) => {
  // Getting values from theme context provider
  const {theme} = useContext(ThemeContext);

  // Returning
  return (
    <Pressable
      style={[
        theme === 'light'
          ? GlobalStyles.bgWhite
          : GlobalStyles.bgSecondaryDarkest,
        GlobalStyles.mHrFifteen,
        GlobalStyles.mbFifteen,
        GlobalStyles.brdFive,
        GlobalStyles.pTen,
        OrderedItemCardStyles.orderContainer,
        {marginTop: index === 0 ? scale(15) : 0},
      ]}
      onPress={onPress}>
      {/* Order ID */}
      <Text
        style={[
          GlobalStyles.paragraphMedium,
          GlobalStyles.openSansSemiBold,
          GlobalStyles.textPrimary,
          GlobalStyles.textLetterSpacing,
        ]}>
        ID - {orderId}
      </Text>
      {/* Destinations */}
      <View
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.justifyContentSpaceBetween,
          GlobalStyles.mbTen,
        ]}>
        <View>
          <Text
            style={[
              GlobalStyles.paragraphExtraSmall,
              GlobalStyles.openSansRegular,
              GlobalStyles.textLetterSpacing,
              theme === 'light'
                ? GlobalStyles.textLight
                : GlobalStyles.textWhite,
            ]}>
            {orderDate}
          </Text>
          <Text
            style={[
              GlobalStyles.paragraphLarge,
              GlobalStyles.openSansSemiBold,
              GlobalStyles.textLetterSpacing,
              theme === 'light'
                ? GlobalStyles.textDark
                : GlobalStyles.textWhite,
            ]}>
            {orderFrom}
          </Text>
        </View>
        <View style={GlobalStyles.alignItemsFlexEnd}>
          <Text
            style={[
              GlobalStyles.paragraphExtraSmall,
              GlobalStyles.openSansRegular,
              GlobalStyles.textLetterSpacing,
              theme === 'light'
                ? GlobalStyles.textLight
                : GlobalStyles.textWhite,
            ]}>
            {deliveryDate}
          </Text>
          <Text
            style={[
              GlobalStyles.paragraphLarge,
              GlobalStyles.openSansSemiBold,
              GlobalStyles.textLetterSpacing,
              theme === 'light'
                ? GlobalStyles.textDark
                : GlobalStyles.textWhite,
            ]}>
            {deliverTo}
          </Text>
        </View>
      </View>
      {/* Order item container */}
      <View
        style={[
          GlobalStyles.pTen,
          GlobalStyles.brdFive,
          theme === 'light' ? GlobalStyles.brGrey : GlobalStyles.brSecondary,
          OrderedItemCardStyles.orderItemContainer,
        ]}>
        <View style={GlobalStyles.flexRow}>
          <View
            style={[
              GlobalStyles.mrTen,
              GlobalStyles.pFive,
              GlobalStyles.brdFive,
              theme === 'light'
                ? GlobalStyles.bgGrey
                : GlobalStyles.bgSecondary,
              OrderedItemCardStyles.itemImageContainer,
            ]}>
            <Image source={itemPhoto} style={GlobalStyles.imageResponsive} />
          </View>
          <View
            style={[
              GlobalStyles.flexOneContainer,
              GlobalStyles.justifyContentSpaceBetween,
            ]}>
            <View>
              <Text
                style={[
                  GlobalStyles.paragraphSmall,
                  GlobalStyles.openSansSemiBold,
                  GlobalStyles.textLetterSpacing,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
                {itemTitle}
              </Text>
              <Text
                style={[
                  GlobalStyles.paragraphExtraSmall,
                  GlobalStyles.openSansRegular,
                  GlobalStyles.textLetterSpacing,
                  theme === 'light'
                    ? GlobalStyles.textLight
                    : GlobalStyles.textWhite,
                ]}>
                {itemShortDetails}
              </Text>
            </View>
            <Text
              style={[
                GlobalStyles.paragraphLarge,
                GlobalStyles.openSansSemiBold,
                GlobalStyles.textLetterSpacing,
                GlobalStyles.textPrimary,
                GlobalStyles.alignSelfRight,
              ]}>
              {itemPrice}
            </Text>
          </View>
        </View>
      </View>
      {/* Order status progress */}
      <View style={GlobalStyles.mtTen}>
        {orderStatus === 'Packed' ? (
          <View
            style={[
              GlobalStyles.flexRow,
              GlobalStyles.alignItemsCenter,
              GlobalStyles.justifyContentSpaceBetween,
              GlobalStyles.positionRelative,
            ]}>
            <View style={GlobalStyles.alignItemsCenter}>
              <View
                style={[
                  GlobalStyles.xyCenter,
                  GlobalStyles.bgPrimary,
                  theme === 'light'
                    ? GlobalStyles.brWhite
                    : GlobalStyles.brPrimary,
                  GlobalStyles.brdFifteen,
                  OrderedItemCardStyles.statusCircle,
                ]}>
                <Icon
                  name="checkmark-outline"
                  size={scale(20)}
                  color={Colors.white}
                />
              </View>
              <Text
                style={[
                  GlobalStyles.paragraphExtraSmall,
                  GlobalStyles.textLetterSpacing,
                  GlobalStyles.mtFive,
                  GlobalStyles.openSansSemiBold,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
                Packed
              </Text>
            </View>
            <View style={GlobalStyles.alignItemsCenter}>
              <View
                style={[
                  theme === 'light'
                    ? GlobalStyles.bgGrey
                    : GlobalStyles.bgSecondary,
                  theme === 'light'
                    ? GlobalStyles.brWhite
                    : GlobalStyles.brDarkGrey,
                  GlobalStyles.xyCenter,
                  GlobalStyles.brdFifteen,
                  OrderedItemCardStyles.statusCircle,
                ]}>
                <View
                  style={[
                    theme === 'light'
                      ? GlobalStyles.bgWhite
                      : GlobalStyles.bgSecondaryLight,
                    OrderedItemCardStyles.statusCircleMiddle,
                  ]}
                />
              </View>
              <Text
                style={[
                  GlobalStyles.paragraphExtraSmall,
                  GlobalStyles.openSansRegular,
                  GlobalStyles.textLetterSpacing,
                  GlobalStyles.mtFive,
                  GlobalStyles.textLight,
                ]}>
                Shipped
              </Text>
            </View>
            <View style={GlobalStyles.alignItemsCenter}>
              <View
                style={[
                  theme === 'light'
                    ? GlobalStyles.bgGrey
                    : GlobalStyles.bgSecondary,
                  theme === 'light'
                    ? GlobalStyles.brWhite
                    : GlobalStyles.brDarkGrey,
                  GlobalStyles.xyCenter,
                  GlobalStyles.brdFifteen,
                  OrderedItemCardStyles.statusCircle,
                ]}>
                <View
                  style={[
                    theme === 'light'
                      ? GlobalStyles.bgWhite
                      : GlobalStyles.bgSecondaryLight,
                    OrderedItemCardStyles.statusCircleMiddle,
                  ]}
                />
              </View>
              <Text
                style={[
                  GlobalStyles.paragraphExtraSmall,
                  GlobalStyles.openSansRegular,
                  GlobalStyles.textLetterSpacing,
                  GlobalStyles.mtFive,
                  GlobalStyles.textLight,
                ]}>
                Reached
              </Text>
            </View>
            <View style={GlobalStyles.alignItemsCenter}>
              <View
                style={[
                  theme === 'light'
                    ? GlobalStyles.bgGrey
                    : GlobalStyles.bgSecondary,
                  theme === 'light'
                    ? GlobalStyles.brWhite
                    : GlobalStyles.brDarkGrey,
                  GlobalStyles.xyCenter,
                  GlobalStyles.brdFifteen,
                  OrderedItemCardStyles.statusCircle,
                ]}>
                <View
                  style={[
                    theme === 'light'
                      ? GlobalStyles.bgWhite
                      : GlobalStyles.bgSecondaryLight,
                    OrderedItemCardStyles.statusCircleMiddle,
                  ]}
                />
              </View>
              <Text
                style={[
                  GlobalStyles.paragraphExtraSmall,
                  GlobalStyles.openSansRegular,
                  GlobalStyles.textLetterSpacing,
                  GlobalStyles.mtFive,
                  GlobalStyles.textLight,
                ]}>
                Delivered
              </Text>
            </View>
          </View>
        ) : orderStatus === 'Shipped' ? (
          <View
            style={[
              GlobalStyles.flexRow,
              GlobalStyles.alignItemsCenter,
              GlobalStyles.justifyContentSpaceBetween,
              GlobalStyles.positionRelative,
            ]}>
            <View style={GlobalStyles.alignItemsCenter}>
              <View
                style={[
                  GlobalStyles.xyCenter,
                  GlobalStyles.bgPrimary,
                  theme === 'light'
                    ? GlobalStyles.brWhite
                    : GlobalStyles.brPrimary,
                  GlobalStyles.brdFifteen,
                  OrderedItemCardStyles.statusCircle,
                ]}>
                <Icon
                  name="checkmark-outline"
                  size={scale(20)}
                  color={Colors.white}
                />
              </View>
              <Text
                style={[
                  GlobalStyles.paragraphExtraSmall,
                  GlobalStyles.textLetterSpacing,
                  GlobalStyles.mtFive,
                  GlobalStyles.openSansSemiBold,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
                Packed
              </Text>
            </View>
            <View style={GlobalStyles.alignItemsCenter}>
              <View
                style={[
                  GlobalStyles.xyCenter,
                  GlobalStyles.bgPrimary,
                  theme === 'light'
                    ? GlobalStyles.brWhite
                    : GlobalStyles.brPrimary,
                  GlobalStyles.brdFifteen,
                  OrderedItemCardStyles.statusCircle,
                ]}>
                <Icon
                  name="checkmark-outline"
                  size={scale(20)}
                  color={Colors.white}
                />
              </View>
              <Text
                style={[
                  GlobalStyles.paragraphExtraSmall,
                  GlobalStyles.textLetterSpacing,
                  GlobalStyles.mtFive,
                  GlobalStyles.openSansSemiBold,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
                Shipped
              </Text>
            </View>
            <View style={GlobalStyles.alignItemsCenter}>
              <View
                style={[
                  theme === 'light'
                    ? GlobalStyles.bgGrey
                    : GlobalStyles.bgSecondary,
                  theme === 'light'
                    ? GlobalStyles.brWhite
                    : GlobalStyles.brDarkGrey,
                  GlobalStyles.xyCenter,
                  GlobalStyles.brdFifteen,
                  OrderedItemCardStyles.statusCircle,
                ]}>
                <View
                  style={[
                    theme === 'light'
                      ? GlobalStyles.bgWhite
                      : GlobalStyles.bgSecondaryLight,
                    OrderedItemCardStyles.statusCircleMiddle,
                  ]}
                />
              </View>
              <Text
                style={[
                  GlobalStyles.paragraphExtraSmall,
                  GlobalStyles.openSansRegular,
                  GlobalStyles.textLetterSpacing,
                  GlobalStyles.mtFive,
                  GlobalStyles.textLight,
                ]}>
                Reached
              </Text>
            </View>
            <View style={GlobalStyles.alignItemsCenter}>
              <View
                style={[
                  theme === 'light'
                    ? GlobalStyles.bgGrey
                    : GlobalStyles.bgSecondary,
                  theme === 'light'
                    ? GlobalStyles.brWhite
                    : GlobalStyles.brDarkGrey,
                  GlobalStyles.xyCenter,
                  GlobalStyles.brdFifteen,
                  OrderedItemCardStyles.statusCircle,
                ]}>
                <View
                  style={[
                    theme === 'light'
                      ? GlobalStyles.bgWhite
                      : GlobalStyles.bgSecondaryLight,
                    OrderedItemCardStyles.statusCircleMiddle,
                  ]}
                />
              </View>
              <Text
                style={[
                  GlobalStyles.paragraphExtraSmall,
                  GlobalStyles.openSansRegular,
                  GlobalStyles.textLetterSpacing,
                  GlobalStyles.mtFive,
                  GlobalStyles.textLight,
                ]}>
                Delivered
              </Text>
            </View>
          </View>
        ) : orderStatus === 'Reached' ? (
          <View
            style={[
              GlobalStyles.flexRow,
              GlobalStyles.alignItemsCenter,
              GlobalStyles.justifyContentSpaceBetween,
              GlobalStyles.positionRelative,
            ]}>
            <View style={GlobalStyles.alignItemsCenter}>
              <View
                style={[
                  GlobalStyles.xyCenter,
                  GlobalStyles.bgPrimary,
                  theme === 'light'
                    ? GlobalStyles.brWhite
                    : GlobalStyles.brPrimary,
                  GlobalStyles.brdFifteen,
                  OrderedItemCardStyles.statusCircle,
                ]}>
                <Icon
                  name="checkmark-outline"
                  size={scale(20)}
                  color={Colors.white}
                />
              </View>
              <Text
                style={[
                  GlobalStyles.paragraphExtraSmall,
                  GlobalStyles.textLetterSpacing,
                  GlobalStyles.mtFive,
                  GlobalStyles.openSansSemiBold,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
                Packed
              </Text>
            </View>
            <View style={GlobalStyles.alignItemsCenter}>
              <View
                style={[
                  GlobalStyles.xyCenter,
                  GlobalStyles.bgPrimary,
                  theme === 'light'
                    ? GlobalStyles.brWhite
                    : GlobalStyles.brPrimary,
                  GlobalStyles.brdFifteen,
                  OrderedItemCardStyles.statusCircle,
                ]}>
                <Icon
                  name="checkmark-outline"
                  size={scale(20)}
                  color={Colors.white}
                />
              </View>
              <Text
                style={[
                  GlobalStyles.paragraphExtraSmall,
                  GlobalStyles.textLetterSpacing,
                  GlobalStyles.mtFive,
                  GlobalStyles.openSansSemiBold,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
                Shipped
              </Text>
            </View>
            <View style={GlobalStyles.alignItemsCenter}>
              <View
                style={[
                  GlobalStyles.xyCenter,
                  GlobalStyles.bgPrimary,
                  theme === 'light'
                    ? GlobalStyles.brWhite
                    : GlobalStyles.brPrimary,
                  GlobalStyles.brdFifteen,
                  OrderedItemCardStyles.statusCircle,
                ]}>
                <Icon
                  name="checkmark-outline"
                  size={scale(20)}
                  color={Colors.white}
                />
              </View>
              <Text
                style={[
                  GlobalStyles.paragraphExtraSmall,
                  GlobalStyles.textLetterSpacing,
                  GlobalStyles.mtFive,
                  GlobalStyles.openSansSemiBold,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
                Reached
              </Text>
            </View>
            <View style={GlobalStyles.alignItemsCenter}>
              <View
                style={[
                  theme === 'light'
                    ? GlobalStyles.bgGrey
                    : GlobalStyles.bgSecondary,
                  theme === 'light'
                    ? GlobalStyles.brWhite
                    : GlobalStyles.brDarkGrey,
                  GlobalStyles.xyCenter,
                  GlobalStyles.brdFifteen,
                  OrderedItemCardStyles.statusCircle,
                ]}>
                <View
                  style={[
                    theme === 'light'
                      ? GlobalStyles.bgWhite
                      : GlobalStyles.bgSecondaryLight,
                    OrderedItemCardStyles.statusCircleMiddle,
                  ]}
                />
              </View>
              <Text
                style={[
                  GlobalStyles.paragraphExtraSmall,
                  GlobalStyles.openSansRegular,
                  GlobalStyles.textLetterSpacing,
                  GlobalStyles.mtFive,
                  GlobalStyles.textLight,
                ]}>
                Delivered
              </Text>
            </View>
          </View>
        ) : orderStatus === 'Delivered' ? (
          <View
            style={[
              GlobalStyles.flexRow,
              GlobalStyles.alignItemsCenter,
              GlobalStyles.justifyContentSpaceBetween,
              GlobalStyles.positionRelative,
            ]}>
            <View style={GlobalStyles.alignItemsCenter}>
              <View
                style={[
                  GlobalStyles.xyCenter,
                  GlobalStyles.bgPrimary,
                  theme === 'light'
                    ? GlobalStyles.brWhite
                    : GlobalStyles.brPrimary,
                  GlobalStyles.brdFifteen,
                  OrderedItemCardStyles.statusCircle,
                ]}>
                <Icon
                  name="checkmark-outline"
                  size={scale(20)}
                  color={Colors.white}
                />
              </View>
              <Text
                style={[
                  GlobalStyles.paragraphExtraSmall,
                  GlobalStyles.textLetterSpacing,
                  GlobalStyles.mtFive,
                  GlobalStyles.openSansSemiBold,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
                Packed
              </Text>
            </View>
            <View style={GlobalStyles.alignItemsCenter}>
              <View
                style={[
                  GlobalStyles.xyCenter,
                  GlobalStyles.bgPrimary,
                  theme === 'light'
                    ? GlobalStyles.brWhite
                    : GlobalStyles.brPrimary,
                  GlobalStyles.brdFifteen,
                  OrderedItemCardStyles.statusCircle,
                ]}>
                <Icon
                  name="checkmark-outline"
                  size={scale(20)}
                  color={Colors.white}
                />
              </View>
              <Text
                style={[
                  GlobalStyles.paragraphExtraSmall,
                  GlobalStyles.textLetterSpacing,
                  GlobalStyles.mtFive,
                  GlobalStyles.openSansSemiBold,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
                Shipped
              </Text>
            </View>
            <View style={GlobalStyles.alignItemsCenter}>
              <View
                style={[
                  GlobalStyles.xyCenter,
                  GlobalStyles.bgPrimary,
                  theme === 'light'
                    ? GlobalStyles.brWhite
                    : GlobalStyles.brPrimary,
                  GlobalStyles.brdFifteen,
                  OrderedItemCardStyles.statusCircle,
                ]}>
                <Icon
                  name="checkmark-outline"
                  size={scale(20)}
                  color={Colors.white}
                />
              </View>
              <Text
                style={[
                  GlobalStyles.paragraphExtraSmall,
                  GlobalStyles.textLetterSpacing,
                  GlobalStyles.mtFive,
                  GlobalStyles.openSansSemiBold,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
                Reached
              </Text>
            </View>
            <View style={GlobalStyles.alignItemsCenter}>
              <View
                style={[
                  GlobalStyles.xyCenter,
                  GlobalStyles.bgPrimary,
                  theme === 'light'
                    ? GlobalStyles.brWhite
                    : GlobalStyles.brPrimary,
                  GlobalStyles.brdFifteen,
                  OrderedItemCardStyles.statusCircle,
                ]}>
                <Icon
                  name="checkmark-outline"
                  size={scale(20)}
                  color={Colors.white}
                />
              </View>
              <Text
                style={[
                  GlobalStyles.paragraphExtraSmall,
                  GlobalStyles.textLetterSpacing,
                  GlobalStyles.mtFive,
                  GlobalStyles.openSansSemiBold,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
                Delivered
              </Text>
            </View>
          </View>
        ) : null}
        {/* Horizontal line */}
        <View
          style={[
            GlobalStyles.positionAbsolute,
            GlobalStyles.alignSelfCenter,
            theme === 'light' ? GlobalStyles.bgGrey : GlobalStyles.bgSecondary,
            OrderedItemCardStyles.horizontalbarDefault,
          ]}
        />
      </View>
    </Pressable>
  );
};

// Exporting
export {ProductCard, ProductList, ProductReviewCard, OrderedItemCard};
