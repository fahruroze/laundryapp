<template>
<aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <a href="" class="brand-link">
            <!-- <img src="" alt="POS" class="brand-image img-circle elevation-3" style="opacity: .8"> -->
            <span class="brand-text font-weight-light">Admin Dashboard</span>
        </a>
        <!-- Sidebar -->
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <!-- <img src="" class="img-circle elevation-2" alt="User Image"> -->
                </div>
                <div class="info">
                    <a href="#" class="d-block">Fahrur</a>
                </div>
            </div>
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li class="nav-item has-treeview menu-open">
                        <router-link :to="{ name: '/'} ">
                        <a href="" class="nav-link active">
                            <i class="nav-icon fa fa-dashboard"></i>
                            <p>
                                Home <span class="sr-only"></span>
                            </p>
                        </a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'outlets.data' }">
                        <a href="" class="nav-link">
                            <i class="nav-icon fa fa-archive"></i>
                            <p>
                                Outlets
                            </p>
                        </a>
                        </router-link>
                    </li>
                    <!-- <ul class="nav navbar-nav"> -->
                        <!-- <li><router-link to="/">Home <span class="sr-only">(current)</span></router-link></li> -->
                        <!-- <li><router-link :to="{ name: 'outlets.data' }">Outlets</router-link></li> -->
                    <!-- </ul> -->
                    <li class="nav-item has-treeview">
                            <a class="nav-link" href="#" data-toggle="modal" data-target="#logout">
                          
                                <i class="nav-icon fa fa-sign-out"></i>
                                <p>
                                    Logout
                                </p>
                            </a>
                            <form id="logout-form" action="" method="POST" style="display: none;">
                            </form>
                        </li>
                </ul>
            </nav>
    </aside>
   
</template>

<script>
export default {
    
}
</script>

