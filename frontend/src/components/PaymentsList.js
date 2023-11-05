import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const PaymentsList = () => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', paddingTop:3 }}>
            <ListItem alignItems="flex-start" sx={{ paddingLeft: 0 }}>
                <ListItemAvatar>
                    <Avatar alt="McDonald's" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <React.Fragment>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <Typography sx={{ color: '#555843', fontWeight: 500 }} variant="subtitle1">McDonald's</Typography>
                                </div>
                                <div>
                                    <Typography sx={{ color: '#555843', fontWeight: 500 }} variant="subtitle1">23$</Typography>
                                </div>
                            </div>
                        </React.Fragment>
                    }
                    secondary={
                        <Typography
                            component="span"
                            variant="body2"
                            color="text.secondary"
                        >
                            Restaurants
                        </Typography>
                    }
                />
            </ListItem>
            <Divider sx={{padding:0}} component="li" />
            <ListItem alignItems="flex-start" sx={{ paddingLeft: 0 }}>
                <ListItemAvatar>
                    <Avatar alt="GOWOD" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <React.Fragment>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <Typography sx={{ color: '#555843', fontWeight: 500 }} variant="subtitle1">GOWOD</Typography>
                                </div>
                                <div>
                                    <Typography sx={{ color: '#555843', fontWeight: 500 }} variant="subtitle1">7.99$</Typography>
                                </div>
                            </div>
                        </React.Fragment>
                    }
                    secondary={
                        <Typography
                            component="span"
                            variant="body2"
                            color="text.secondary"
                        >
                            Subscription
                        </Typography>
                    }
                />
            </ListItem>
            <Divider sx={{padding:0}} component="li" />
            <ListItem alignItems="flex-start" sx={{ paddingLeft: 0 }}>
                <ListItemAvatar>
                    <Avatar alt="Spotify" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <React.Fragment>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <Typography sx={{ color: '#555843', fontWeight: 500 }} variant="subtitle1">Spotify</Typography>
                                </div>
                                <div>
                                    <Typography sx={{ color: '#555843', fontWeight: 500 }} variant="subtitle1">2.99$</Typography>
                                </div>
                            </div>
                        </React.Fragment>
                    }
                    secondary={
                        <Typography
                            component="span"
                            variant="body2"
                            color="text.secondary"
                        >
                            Subscription
                        </Typography>
                    }
                />
            </ListItem>
        </List>
    )
}

export default PaymentsList