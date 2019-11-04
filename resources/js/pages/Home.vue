<template>

<aside class="main-sidebar sidebar-white-primary elevation-4">
        <!-- Brand Logo -->dark
        <a href="" class="brand-link">
            <img src="" alt="POS" class="brand-image img-circle elevation-3"
                style="opacity: .8">
            <span class="brand-text font-weight-light">POS</span>
        </a>
        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img src="" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                    <a href="#" class="d-block">Daengweb.id</a>
                </div>
            </div>
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li class="nav-item has-treeview menu-open">
                        <a href="#" class="nav-link active">
                            <i class="nav-icon fa fa-dashboard"></i>
                            <p>
                                Dashboard
                                <i class="right fa fa-angle-left"></i>
                            </p>
                        </a>
                    </li>
                    <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fa fa-server"></i>
                            <p>
                                Manajemen Produk
                                <i class="right fa fa-angle-left"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="" class="nav-link">
                                    <i class="fa fa-circle-o nav-icon"></i>
                                    <p>Kategori</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    <i class="fa fa-circle-o nav-icon"></i>
                                    <p>Produk</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    
                    <li class="nav-item has-treeview">
                            <a class="nav-link" href="#" data-toggle="modal" data-target="#logout">
                                <i class="nav-icon fa fa-file-o"></i>
                            </a>
                        </li>
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
        </div>
    </aside>
</template>
<script>

export default {
    
}
</script>