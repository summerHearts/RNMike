'use strict'

var React = require('react-native');

var {
	Image,
	PixelRatio,
	Platform,
	StyleSheet,
	Text,
	TouchableHighlight,
	TouchableNativeFeedback,
	View
} = React;


import StarRating from 'react-native-star-rating';

var RecommendCell = React.createClass({

  onGeneralStarRatingPress(rating) {
    this.setState({
      generalStarCount: rating
    });
  },
	render : function(){
		var price = this.props.shopData.price;
		var TouchableElement = TouchableHighlight;

		if (Platform.OS === 'android') {
			//
		};

		return (
			<View>
				<TouchableElement
					onPress = {this.props.onSelect}//$$
					onShowUnderlay = {this.props.onHighlight}
					onHideUnderlay = {this.props.onUnhighlight}>
					<View style = {styles.row}>
            <Image source={{uri: 'http://upload-images.jianshu.io/upload_images/632860-9cef68bc50fa0b51.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240'}}
               style = {styles.cellImage} 
              />
						<View style = {styles.textContainer}>
							<Text style = {styles.shopTitle} numberOfLines = {1}>
								{this.props.shopData.brandname}
							</Text>
              <View style={styles.starConfig}>
                <StarRating 
                   disabled={true}
                   maxStars={5}
                   rating={3.5}
                   starColor={'orange'}
                   starSize = {20}
                   selectedStar={(rating) => this.onGeneralStarRatingPress(rating)}
                 />
                   <Text style={styles.instructions}>{3.5+'分'}</Text>
                   <Text style={styles.instructTime}>{'2014年装修'}</Text>
               </View>
               <Text style={styles.movieYear} numberOfLines={2}>{this.props.shopData.title}
               </Text>
						</View>
            <Text style={styles.priceColor}>￥{price}起</Text>
					</View>
				</TouchableElement>
			</View>
		);
	},
});


var styles = StyleSheet.create({
	textContainer: {
    flex: 1,
     flexDirection:'column',
  },
  starConfig:{
    flexDirection:'row',
    marginTop:0,
    marginLeft:0,
    height:20,
    width:120,
  },
   instructions: {
    marginTop:4,
    marginLeft:0,
    textAlign: 'center',
    color: '#333333',
    width:40,
    fontSize: 12,
  },
  instructTime:{
    marginTop:4,
    marginLeft:0,
    textAlign: 'left',
    color: '#333333',
    width:100,
    fontSize: 12,
  },
  shopTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    // marginBottom: 2,
    marginTop:5,
    height:20,
    color:'white'
  },
  movieYear: {
    color: '#999999',
    fontSize: 12,
    // marginTop:5,
    marginBottom:5,
  },
  row: {
    alignItems: 'center',
    backgroundColor:'rgb(17, 23, 35)',
    flexDirection: 'row',
    padding: 5,
  },
  cellImage: {
    borderRadius:15,
    backgroundColor: '#dddddd',
    height: 75,
    marginRight: 10,
    width: 75,
  },
  cellBorder: {
    backgroundColor: 'lightslategray',
    // Trick to get the thinest line the device can display
    height: 1 / PixelRatio.get(),
    marginLeft: 4,
  },
  priceColor:{
  	color:'chocolate',
  },
});


module.exports = RecommendCell;