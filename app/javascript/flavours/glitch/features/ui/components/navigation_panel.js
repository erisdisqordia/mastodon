import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Icon from 'flavours/glitch/components/icon';
import { profile_directory, showTrends } from 'flavours/glitch/util/initial_state';
import { preferencesLink, relationshipsLink } from 'flavours/glitch/util/backend_links';
import NotificationsCounterIcon from './notifications_counter_icon';
import FollowRequestsNavLink from './follow_requests_nav_link';
import ListPanel from './list_panel';
import TrendsContainer from 'flavours/glitch/features/getting_started/containers/trends_container';

const NavigationPanel = ({ onOpenSettings }) => (
  <div className='navigation-panel'>
    <NavLink className='column-link column-link--transparent' to='/timelines/home' data-preview-title-id='column.home' data-preview-icon='home' ><Icon className='column-link__icon' id='home' fixedWidth /><FormattedMessage id='tabs_bar.home' defaultMessage='Home' /></NavLink>
    <NavLink className='column-link column-link--transparent' to='/notifications' data-preview-title-id='column.notifications' data-preview-icon='bell' ><NotificationsCounterIcon className='column-link__icon' /><FormattedMessage id='tabs_bar.notifications' defaultMessage='Notifications' /></NavLink>
    <FollowRequestsNavLink />
    <NavLink className='column-link column-link--transparent' to='/timelines/public/local' data-preview-title-id='column.community' data-preview-icon='users' ><Icon className='column-link__icon' id='users' fixedWidth /><FormattedMessage id='tabs_bar.local_timeline' defaultMessage='Local' /></NavLink>
    <NavLink className='column-link column-link--transparent' exact to='/timelines/public' data-preview-title-id='column.public' data-preview-icon='globe' ><Icon className='column-link__icon' id='globe' fixedWidth /><FormattedMessage id='tabs_bar.federated_timeline' defaultMessage='Federated' /></NavLink>
    <NavLink className='column-link column-link--transparent' to='/timelines/tag/koyujournal'><Icon className='column-link__icon' id='hashtag' fixedWidth /><FormattedMessage id='navigation_bar.journal' defaultMessage='koyu.space Journal'></FormattedMessage></NavLink>
    <NavLink className='column-link column-link--transparent' to='/timelines/direct'><Icon className='column-link__icon' id='envelope' fixedWidth /><FormattedMessage id='navigation_bar.direct' defaultMessage='Direct messages' /></NavLink>
    <NavLink className='column-link column-link--transparent' to='/bookmarks'><Icon className='column-link__icon' id='bookmark' fixedWidth /><FormattedMessage id='navigation_bar.bookmarks' defaultMessage='Bookmarks' /></NavLink>
    {profile_directory && <NavLink className='column-link column-link--transparent' to='/directory'><Icon className='column-link__icon' id='address-book-o' fixedWidth /><FormattedMessage id='getting_started.directory' defaultMessage='Profile directory' /></NavLink>}
    <NavLink className='column-link column-link--transparent' to='/lists'><Icon className='column-link__icon' id='list-ul' fixedWidth /><FormattedMessage id='navigation_bar.lists' defaultMessage='Lists' /></NavLink>
    <NavLink className='column-link column-link--transparent' to='/start'><Icon className='column-link__icon' id='plus-circle' fixedWidth /><FormattedMessage id='navigation_bar.recommendations' defaultMessage='Recommendations' /></NavLink>
    <NavLink className='column-link column-link--transparent' to='/getting-started-misc'><Icon className='column-link__icon' id='ellipsis-h' fixedWidth /><FormattedMessage id='navigation_bar.misc' defaultMessage='Misc' /></NavLink>

    <div id="motd"></div>

    <ListPanel />

    <hr />

    {!!preferencesLink && <a className='column-link column-link--transparent' href={preferencesLink} target='_blank'><Icon className='column-link__icon' id='cog' fixedWidth /><FormattedMessage id='navigation_bar.preferences' defaultMessage='Preferences' /></a>}
    <a className='column-link column-link--transparent' href='#' onClick={onOpenSettings}><Icon className='column-link__icon' id='cogs' fixedWidth /><FormattedMessage id='navigation_bar.app_settings' defaultMessage='App settings' /></a>
    {!!relationshipsLink && <a className='column-link column-link--transparent' href={relationshipsLink} target='_blank'><Icon className='column-link__icon' id='users' fixedWidth /><FormattedMessage id='navigation_bar.follows_and_followers' defaultMessage='Follows and followers' /></a>}
    <a className='column-link column-link--transparent' href='/about' target='_blank'><Icon className='column-link__icon' id='external-link' fixedWidth /><FormattedMessage id='navigation_bar.frontpage' defaultMessage='Show front page' /></a>

    {showTrends && <div className='flex-spacer' />}
    {showTrends && <TrendsContainer />}
  </div>
);

export default withRouter(NavigationPanel);
