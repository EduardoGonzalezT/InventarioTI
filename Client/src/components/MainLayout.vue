<script setup>
import "../styles/main/main.css";
import Sidebar from "./ui/Sidebar.vue";
import Header from "./ui/Head.vue";
</script>

<template>
  <section class="MainLayout">
    <Splitter class="splitter-layout">
      <SplitterPanel class="MenuPanel"><Sidebar /></SplitterPanel>
      <SplitterPanel class="MainPanel">
        <Splitter layout="vertical">
          <SplitterPanel class="HeaderPanel"><Header /></SplitterPanel>
          <SplitterPanel class="ContainerPanel">
            <Splitter>
              <SplitterPanel class="ContentPanel">
                <router-view />
              </SplitterPanel>
            </Splitter>
          </SplitterPanel>
        </Splitter>
      </SplitterPanel>
    </Splitter>
  </section>
</template>
