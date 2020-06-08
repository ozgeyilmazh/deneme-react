import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
    function blurefekt(){
         var x = document.getElementsByClassName("container");
         x[0].style.filter= "blur(0.9rem)";
    }
    function blurefektkaldir(){
         var x = document.getElementsByClassName("container");
         x[0].style.filter= "blur(0)";
    }
  return (
       
      <div  style={{width:'100%' , margin:'0'}} className="header">
       <div  style={{width:'100%' , margin:'0'}} className="header-overlay2">
      <nav >
       <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title="Blog Template 1"  scroll>
                        <Navigation>
                            <button className="buton" data-toggle="modal" data-target="#exampleModalLong" onClick={blurefekt}>Anasayfa</button>
                            <button className="buton" data-toggle="modal" data-target="#exampleModalLong2" onClick={blurefekt}>Hakkımızda</button>
                            <button className="buton" data-toggle="modal" data-target="#exampleModalLong3" onClick={blurefekt}>Blog</button>
                            <button className="buton" data-toggle="modal" data-target="#exampleModalLong4" onClick={blurefekt}>İletişim</button>
      
                        </Navigation>

                    </Header>

                    <Drawer title="Blog Template 1">
                        <Navigation>
                            <button className="buton" data-toggle="modal" data-target="#exampleModalLong" onClick={blurefekt}>Anasayfa</button>
                            <button className="buton" data-toggle="modal" data-target="#exampleModalLong2" onClick={blurefekt}>Hakkımızda</button>
                            <button className="buton" data-toggle="modal" data-target="#exampleModalLong3" onClick={blurefekt}>Blog</button>
                            <button className="buton" data-toggle="modal" data-target="#exampleModalLong4" onClick={blurefekt}>İletişim</button>
                        </Navigation>
                    </Drawer>

                    <div className="modal fade" id="exampleModalLong" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h2 className="modal-title" id="exampleModalLongTitle" style={{color:' #fbf8ec'}}>Anasayfa</h2>
                                  </div>
                                  <div className="modal-body">
                                        <img src='https://images.unsplash.com/photo-1530939986565-c0c17d114071?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80' width="100%" className="hakkimizda-resim"/>
                                        <p className="hakkimizda-paragraf">
                                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={blurefektkaldir}>Kapat</button>
                                  </div>
                                </div>
                              </div>
                            </div>
      
                            <div className="modal fade" id="exampleModalLong2" role="dialog" aria-labelledby="exampleModalLongTitle2" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h2 className="modal-title" id="exampleModalLongTitle2" style={{color:' #fbf8ec'}}>Hakkımızda</h2>
                                  </div>
                                  <div className="modal-body">
                                       <img src='https://images.unsplash.com/photo-1514501283062-6cb011c8b0da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' width="100%" className="hakkimizda-resim"/>
                                        <p className="hakkimizda-paragraf">
                                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                        <p className="hakkimizda-paragraf">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={blurefektkaldir}>Kapat</button>
                                  </div>
                                </div>
                              </div>
                            </div>

      
                            <div className="modal fade" id="exampleModalLong3" role="dialog" aria-labelledby="exampleModalLongTitle3" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h2 className="modal-title" id="exampleModalLongTitle3" style={{color:' #fbf8ec'}}>Blog</h2>
                                  </div>
                                  <div className="modal-body">
                                       <img src='https://images.unsplash.com/photo-1585591366248-91fffa63676e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' width="60%" className="hakkimizda-resim"/>
                                        <p className="hakkimizda-paragraf">
                                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<a href="#" className="devam"> Devamını okumak için tıklayın...</a>
                                        </p>
                                      <img src='https://images.unsplash.com/photo-1585660024633-321c071185ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80' width="60%" className="hakkimizda-resim"/>
                                        <p className="hakkimizda-paragraf">
                                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<a href="#" className="devam"> Devamını okumak için tıklayın...</a>
                                        </p>
                                      <img src='https://images.unsplash.com/photo-1585737757692-28c2c33e5d95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' width="60%" className="hakkimizda-resim"/>
                                        <p className="hakkimizda-paragraf">
                                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<a href="#" className="devam"> Devamını okumak için tıklayın...</a>

                                        </p>
                                  </div>
                                  <div className="modal-footer">
                                    <nav aria-label="Page navigation">
                                      <ul className="pagination">
                                        <li>
                                          <a href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                          </a>
                                        </li>
                                        <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li>
                                          <a href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                          </a>
                                        </li>
                                      </ul>
                                    </nav>
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={blurefektkaldir}>Kapat</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="modal fade" id="exampleModalLong4" role="dialog" aria-labelledby="exampleModalLongTitle4" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h2 className="modal-title" id="exampleModalLongTitle4" style={{color:' #fbf8ec'}}>İletişim</h2>
                                  </div>
                                  <div className="modal-body">
                                    <form className="form-inline">
                                      <div className="form-group">
                                        <label for="exampleInputName2" style={{color:'white'}}>İsim</label>
                                            <br />
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Jane Doe" />
                                      </div>

                                      <div className="form-group">
                                        <label for="exampleInputEmail2" style={{color:'white'}}>Email</label>
                                            <br />
                                        <input type="email" className="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com" /> 
                                      </div>
                                              <br /><br />
                                      <div className="form-group">
                                         <label style={{color:'white'}}>Mesaj</label>
                                            <br />
                                        <textarea className="col-sm-12 form-control mesaj" rows="5" width="300%"></textarea>
                                      </div>
                                        <br/>
                                      <div className="form-inline">
                                         <button className="btn-gonder">Gönder</button>  
                                         <button className="btn-temizle">Temizle</button>
                                      </div>
                                    </form>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="social">
                                            <ul className="social-icons">
                                                <li><a href="#"><img src='https://image.flaticon.com/icons/svg/733/733641.svg' width="10%"  className=""/></a></li>
                                                <li><a href="#"><img src='https://image.flaticon.com/icons/svg/1384/1384005.svg' width="10%"  className=""/></a></li>
                                                <li><a href="#"><img src='https://image.flaticon.com/icons/svg/733/733635.svg' width="10%"  className=""/></a></li>
                                                <li><a href="#"><img src='https://image.flaticon.com/icons/svg/1384/1384014.svg' width="10%"  className=""/></a></li>
                                                <li><a href="#"><img src='https://image.flaticon.com/icons/svg/1384/1384015.svg' width="10%"  className=""/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                  </div>
                                  <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={blurefektkaldir}>Kapat</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                </Layout>
                   
        </div>
      
      </nav>
              <div className="container" style={{width:'100%' , margin:'0'}} onClick={blurefektkaldir}>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="header-baslik">
                            <div className="container">
                                <h1 className="presentation-title">Blog Theme 1</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                    <h6 className="creater">Designed and coded by  <a href="http://ozgeyilmazdeneme.atwebpages.com/" target="_blank">
                        <img src="https://www.pngarts.com/files/3/Girl-Avatar-PNG-Photo.png" className="avatar" width="10%"/> An Engineer </a></h6>
                    </div>
              </div>
              </div>

            <div  style={{width:'100%' , margin:'100'}} className="header-overlay" onClick={blurefektkaldir}></div>
    </div>
      </div>
  );
}

export default App;
