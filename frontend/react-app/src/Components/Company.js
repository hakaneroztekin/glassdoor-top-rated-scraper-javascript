import React, {Component} from 'react';
import withStyles from '@material-ui/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import DescriptionIcon from '@material-ui/icons/Description';
import ButtonBar from './buttons/ButtonBar';

const styles = theme => ({
    paper: {
        padding: theme.spacing(3),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        marginTop: 10,
        width: '100%',
    },
    avatar: {
        margin: 10,
        backgroundColor: theme.palette.grey['200'],
        color: theme.palette.text.primary
    },
    avatarContainer: {
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            marginBottom: theme.spacing(4)
        }
    },
    itemContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }
    },
    baseline: {
        alignSelf: 'baseline',
        marginLeft: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
            marginLeft: 0
        }
    },
    inline: {
        display: 'inline-block',
        marginLeft: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0
        }
    },
    inlineRight: {
        width: '30%',
        textAlign: 'right',
        marginLeft: 50,
        alignSelf: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: 0,
            textAlign: 'center'
        }
    },
    backButton: {
        marginRight: theme.spacing(2)
    }
});

class Company extends Component {

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <div className={classes.itemContainer}>
                        <div className={classes.avatarContainer}>
                            <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                                {this.props.rank}.
                            </Typography>
                        </div><div className={classes.avatarContainer}>
                            <Avatar className={classes.avatar}>
                                <img
                                    src={this.props.pictureURL}
                                    alt={this.props.name}
                                    width={100}
                                />
                            </Avatar>
                        </div>
                        <div className={classes.baseline}>
                            <div className={classes.inline}>
                                <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                                    {this.props.name}
                                </Typography>
                                <Typography variant="h6" gutterBottom>
                                    {this.props.review} Reviews
                                </Typography>
                            </div>
                        </div>
                        <div className={classes.inlineRight}>
                            <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                                RATING
                            </Typography>
                            <Typography variant="h4" gutterBottom>
                                ⭐ {this.props.rating}
                            </Typography>
                            <ButtonBar profileURL={this.props.profileURL}/>
                        </div>
                    </div>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(Company);