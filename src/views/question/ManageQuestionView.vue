<template>
  <div id="manageQuestionView">
    <div class="top_operation">
      <add-question class="add_question" />
      <a-button :loading="loading" type="primary" @click="refreshData()"
        >刷新
      </a-button>
    </div>
    <a-table
      :ref="tableRef"
      :columns="columns"
      :data="dataList"
      :pagination="{
        showTotal: true,
        pageSize: searchParams.pageSize,
        current: searchParams.pageNum,
        total,
      }"
    >
      <template #optional="{ record }">
        <a-space>
          <a-button type="primary" @click="doUpdate(record)"> 修改</a-button>
          <a-button status="danger" @click="doDelete(record)">删除</a-button>
        </a-space>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { Question, QuestionControllerService } from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";
import AddQuestion from "@/components/AddQuestionComponent.vue";
import { throttle } from "radash";

const show = ref(true);
const tableRef = ref();

const dataList = ref([]);
const total = ref(0);

const loading = ref(false);

const searchParams = ref({
  pageSize: 10,
  pageNum: 1,
});

const loadData = async () => {
  const res = await QuestionControllerService.listQuestionByPageUsingPost(
    searchParams.value
  );
  if (res.code === 200) {
    dataList.value = res.data.records;
    total.value = res.data.total;
    loading.value = false; // 加载完成，隐藏加载状态
  } else {
    message.error("加载失败，" + res.message);
  }
};

/**
 * 页面加载时，请求数据
 */
onMounted(() => {
  loadData();
});

// {id: "1", title: "A+ D", content: "新的题目内容", tags: "["二叉树"]", answer: "新的答案", submitNum: 0,…}

const columns = [
  {
    title: "id",
    dataIndex: "id",
  },
  {
    title: "标题",
    dataIndex: "title",
  },
  {
    title: "内容",
    dataIndex: "content",
  },
  {
    title: "标签",
    dataIndex: "tags",
  },
  {
    title: "答案",
    dataIndex: "answer",
  },
  {
    title: "提交数",
    dataIndex: "submitNum",
  },
  {
    title: "通过数",
    dataIndex: "acceptedNum",
  },
  {
    title: "判题配置",
    dataIndex: "judgeConfig",
  },
  {
    title: "判题用例",
    dataIndex: "judgeCase",
  },
  {
    title: "用户id",
    dataIndex: "userId",
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
  },
  {
    title: "操作",
    slotName: "optional",
  },
];

const doDelete = async (question: Question) => {
  const res = await QuestionControllerService.deleteQuestionUsingPost({
    id: question.id,
  });
  if (res.code === 0) {
    message.success("删除成功");
    loadData();
  } else {
    message.error("删除失败");
  }
};

const router = useRouter();

const doUpdate = (question: Question) => {
  router.push({
    path: "/update/question",
    query: {
      id: question.id,
    },
  });
};

// const refreshData = () => {
//   loading.value = true; // 开始加载数据，显示加载状态
//   setTimeout(() => {
//     loadData(); // 执行数据加载
//   }, 500);
// };

// 节流刷新数据函数
const throttledRefreshData = throttle({ interval: 3000 }, async () => {
  loading.value = true; // 开始加载数据，显示加载状态
  await loadData(); // 执行数据加载
}); // 设置节流时间为 3000 毫秒（即 3 秒）

const refreshData = () => {
  throttledRefreshData(); // 调用节流函数以刷新数据
};
</script>

<style scoped>
#manageQuestionView {
  .top_operation {
    display: flex;
    margin-bottom: 10px;

    .add_question {
      margin-right: 10px;
    }
  }
}
</style>
