import './App.css';
import Header from './Header';
import Message from './Message'
import Warning from './Warning'
import {NotificationsOff} from '@material-ui/icons'
import Search from './Search'
import Messages from './Messages'

function App() {

  return (
    <div className="app">
      <div className="app_left">
        <Header />
        <Warning
          Icon={NotificationsOff}
          title="Receba notificações de novas mensagens"
          description="Ativar notificações na área de trabalho"
          color="#9de1fe"
        />
        <Search />
        <Messages />
      </div>

      <div className="app_right">
        <Message />
      </div>

    </div>
  );
}

export default App;
