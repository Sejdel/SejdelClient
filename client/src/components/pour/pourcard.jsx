import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import moment from 'moment'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  collapse: {
    marginBottom: theme.spacing(1),
    float: "right"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: theme.palette.primary.dark,
  },
  header: {
    width: "100%",
  },
  left: {
    float: "left"
  },
  right: {
    float: "right"
  }
}));

export default function PourCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [hover, setHover] =  React.useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const initial = props.name.charAt(0);

  var time = "Just Now";
  var date = ""; 
  if (!moment().isSame(props.date, 'minute')) {
    time = moment(props.date).format("kk:mm");
    date = moment(props.date).calendar(null, {
          sameDay: '[Today]',
          nextDay: '[Tomorrow]',
          nextWeek: 'dddd',
          lastDay: '[Yesterday]',
          lastWeek: '[Last] dddd',
          sameElse: 'MMM D'
    }); 
  }

  return (
    <Card className={classes.root} 
        raised={hover} 
        onClick={handleExpandClick} 
        onMouseEnter={() => {setHover(true)}}
        onMouseLeave={() => {setHover(false)}}
        >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {initial}
          </Avatar>
        }
        title={
            <div className={classes.header}>
                <div className={classes.left}> 
                    <Typography align="left" variant="subtitle1">
                        <b>{props.name}</b>
                    </Typography>

                    <Typography align="left" variant="subtitle1"> 
                        {Math.round(props.volume)} ml of {props.beer}
                    </Typography>
                </div>

                <div className={classes.right}> 
                    <Typography align="right" variant="subtitle1">
                        {time}
                    </Typography>

                    <Typography align="right" variant="subtitle1"> 
                    {date}
                    </Typography>
                </div>
            </div>
        }   
      />

    <Collapse in={expanded} timeout="auto" unmountOnExit >

        <CardContent >
            <Typography alignt="left" className={classes.left}> 
              Created by {props.created_by}
            </Typography>
            <Typography align="right" className={classes.collapse} color="primary"> {props.cost} SEK</Typography>
        </CardContent>
      </Collapse>

    </Card>
  );
}
