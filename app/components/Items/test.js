        <Table
          style={style.table}
        >
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>functionId</TableHeaderColumn>
              <TableHeaderColumn>functionName</TableHeaderColumn>
              <TableHeaderColumn style={style.tableCreate}>check</TableHeaderColumn>
              <TableHeaderColumn style={style.tableCreate}>edit</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody deselectOnClickaway={false}>
          {
            items.map((item, i) => 
              <TableRow 
                onClick={() => itemsActions.handleSelected()}
                // onTouchTap={this.handleClick.bind(this)}
                what={item.checked}
                key={i}>
                <TableRowColumn>{item.functionId}</TableRowColumn>
                <TableRowColumn>{item.functionName}</TableRowColumn>
                <TableRowColumn style={style.tableCreate}>
                  <FloatingActionButton mini={true} secondary={true} onClick={() => itemsActions.handleOpen()}>
                   <ContentForward />
                  </FloatingActionButton>
                </TableRowColumn>
                <TableRowColumn onClick={() => itemsActions.handleOpen()} style={style.tableCreate}>
                  <FloatingActionButton mini={true} secondary={true} onClick={() => itemsActions.handleEdit()}>
                   <ContentCreate />
                  </FloatingActionButton>
                </TableRowColumn>

                <Dialog
                  open={item.open}
                  functions={item}
                  itemsActions={itemsActions}
                  handleClose={() => itemsActions.handleClose()}
                />

              </TableRow>
              
              )
          }
          </TableBody>
        </Table>