import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('tech_stack', () => App);
// echo 256 | sudo tee -a /proc/sys/fs/inotify/max_user_instances
// echo 32768 | sudo tee -a /proc/sys/fs/inotify/max_queued_events
// echo 65536 | sudo tee -a /proc/sys/fs/inotify/max_user_watches
// watchman shutdown-server
//adb shell input keyevent 82
