import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AppBar from 'material-ui/lib/app-bar'
import IconButton from 'material-ui/lib/icon-button'
import ActionHome from 'material-ui/lib/svg-icons/action/home'
import {fullWhite} from 'material-ui/lib/styles/colors'
import Checkbox from 'material-ui/lib/checkbox'

import * as MenusActions from '../actions/menus'
import * as ItemsActions from '../actions/items'
import Items from '../components/Items/Items'
import Menus from '../components/Menus/Menus'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // this.props.menusActions.readItemsFile()  //electron下，用fs读取文件
    this.props.menusActions.receiveMenus()  //web下，假数据
  }                  

  componentWillReceiveProps(nextState) {
    // console.log('执行 app componentReceiveProps')
    const Id = (nextState.items.map(item => item.id))[0] //这个是和后面的menuId做对比判断的，map出来的是数组所以Id === menuId 为false，因为这个只有一个子集，所以直接用[0]取值
    if(nextState.items !== this.props.items) {  //不加这个判断很容易进行死循环，一直更新
      this.props.menusActions.combineItems(Id, nextState.items)
    }
    // console.log('执行 app componentReceiveProps 完成')
  }

  render() {
    const {items, menusActions, itemsActions, menus} = this.props
    return(    
      <div>
        <AppBar
          title="Coooooool"
            iconElementLeft={
                <IconButton>
                  <ActionHome color={fullWhite} />
                </IconButton>
              }
        />

        <div className="MainBody">

          <div className="MainLeft">
            <Menus
              actions={menusActions}
              menus={menus}/>
          </div>

          <div className="MainRight">
            <Items
              itemsActions={itemsActions}
              items={items}/>
          </div>

        </div>
      </div>
      )
  }
}

function mapStateToProps(state) {
  // menu = Object.assign({}, menu, {functions: item}) //想把items上改变合并到menus上用这个方法行不通,因为item和menu是平级
  return {
    items: state.items,
    menus: state.menus
  }
}

function mapDispatchToProps(dispatch) {
  return {
    menusActions: bindActionCreators(MenusActions, dispatch),
    itemsActions: bindActionCreators(ItemsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
