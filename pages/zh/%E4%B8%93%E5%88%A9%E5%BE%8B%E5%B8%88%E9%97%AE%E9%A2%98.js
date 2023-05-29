import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/to-delete/layout'

export default function 专利律师问题() {
  return (
    <Layout>
      <Head>
        <title>专利代理人常见问题|专利代理人|专利注册</title>
        <meta
          name="description"
          content="Baxter IP提供专利代理服务，从这些专利律师的不同。专利律师服务专注于实现专利注册。"
        />
        <link
          rel="canonical"
          href="https://www.baxterip.com.au/zh/专利律师问题"
        />
        <link
          rel="alternate"
          href="https://www.baxterip.com.au/zh/%E4%B8%93%E5%88%A9%E5%BE%8B%E5%B8%88%E9%97%AE%E9%A2%98"
          hrefLang="zh"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.baxterip.com.au/faqs"
        />
      </Head>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 list-none pm-25">
          <li className="inline-flex items-center">
            <Link href="/zh">
              <div className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
              </div>
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <Link
                href="/知识产权信息"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                知识产权信息
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                专利律师问题
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1>专利律师问题</h1>
      <section>
        <h2>专利相关问题</h2>
        <h3>什么是专利？</h3>

        <p>
          专利是一项独有垄断的发明被联邦政府授所授权的，发明可以是一件产品或者是一个程序。一般情况下，是做某事的一种新方法或者是提供一个新的技术去解决一个问题。专利提供了法律效力来防止他人利用自己的发明。
        </p>
        <h3>专利可以提供什么样的保护？</h3>

        <p>
          专利保护是指未经专利人同意，该发明不能被商业化制造，使用，分发或销售。为了阻止侵权，该专利通常被法院强制执行。相反，法院也可以在第三方成功挑战下宣判该专利无效。
        </p>
        <h3>什么可以获得专利？</h3>

        <p>对于一项发明获得专利，它必须满足一定的标准。例如，它必须</p>

        <ul>
          <li>在世界上是独一无二的，</li>
          <li>和现有的技术相比，它包含一个创新的或者有创造力的步骤。</li>
        </ul>

        <p>
          在澳大利亚，唯一排除在外的专利是：人类和生物的繁衍。因此，这些专利可以保护的产品和工序包括：医药产品，新材料，
          <Link href="https://www.baxterip.com.au/zh/%E4%B8%93%E5%88%A9%E6%8A%80%E6%9C%AF%E9%A2%86%E5%9F%9F#%E5%8C%96%E5%AD%A6%E7%94%9F%E7%89%A9%E6%8A%80%E6%9C%AF%E5%92%8C%E8%8D%AF%E5%AD%A6%E4%B8%93%E5%88%A9">
            化学工艺
          </Link>{' '}
          和所有方式的
          <Link href="https://www.baxterip.com.au/zh/%E4%B8%93%E5%88%A9%E6%8A%80%E6%9C%AF%E9%A2%86%E5%9F%9F#%E6%9C%BA%E6%A2%B0%E5%B7%A5%E7%A8%8B%E4%B8%93%E5%88%A9">
            {' '}
            机械
          </Link>
          ，
          <Link href="https://www.baxterip.com.au/zh/%E4%B8%93%E5%88%A9%E6%8A%80%E6%9C%AF%E9%A2%86%E5%9F%9F#%E5%8A%A8%E5%8A%9B%E5%B7%A5%E7%A8%8B%E5%92%8C%E7%94%B5%E5%AD%90%E4%B8%93%E5%88%A9">
            电气和电子设备
          </Link>
          。
        </p>
        <h3>专利持有者有哪些权利？</h3>

        <p>
          专利持有人有权决定谁可以或者谁不可以使用这项发明在，在这项发明被保护的时间内。在共同商定的条款下，专利持有人可以给予许可或者牌照给其他人使用这项发明在双方达成协议的情况下。专利持有者也可以将持有权转让给新的专利持有人。一旦专利到期，专利持有者将失去专利所有权，而此项专利将会再次进入公共领域，可再次为他人作为商业利用。
        </p>
        <h3>谁有权申请专利？</h3>

        <p>
          只有发明人或者从发明人手上获得专利发明权的人，才有权利被授权专利发明。如果此发明的构思是由发明人的雇员所传达，那么这项发明的发明权将为雇主所有。如果知识产权是通过在其正常职责过程中的员工、承包商或者咨询公司开发的，那么出示一个书面证明来保证之前相关的工作是很重要的。
        </p>
        <h3>我应该什么时候提交专利申请？</h3>

        <p>
          在一项发明被公开披露细节或者进行任何商业活动之前提交专利申请是非常重要的。否则，这有可能导致您失去对专利的权利。但是如果情况已经发生，请立即寻求专利律师的意见。
        </p>
        <h3>专利申请获批专利需要多长时间？</h3>

        <p>
          A{' '}
          <Link href="https://www.baxterip.com.au/zh/%E4%B8%B4%E6%97%B6%E4%B8%93%E5%88%A9">
            优先权日
          </Link>
          （为了证明你的发明是一项最新发明）。临时申请只是暂时的，为了为了保证其优先权日的有效性，澳大利亚或者国际专利申请必须在申请递交后的12个月内授权。
        </p>
        <h3>什么是临时申请？</h3>

        <p>
          临时申请是用于根据客户意愿建立一个
          <Link href="https://www.baxterip.com.au/zh/%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E6%9C%AF%E8%AF%AD%E8%A1%A8#%E4%BC%98%E5%85%88%E6%97%A5%E6%9C%9F">
            优先权日
          </Link>
          （为了证明你的发明是一项最新发明）。临时申请只是暂时的，为了为了保证其优先权日的有效性，澳大利亚或者国际专利申请必须在申请递交后的12个月内授权。
        </p>
        <h3>专利可以持续多久？</h3>

        <p>
          在一般情况下，从被授权日开始，澳大利亚标准专利拥有最长20年的期限。而针对澳大利亚创新专利来说，从完成全部申请被授权日开始拥有最长8年的期限。
        </p>
        <h3>我什么时候可以开始销售我的产品和/或开始寻找对其感兴趣的人？</h3>

        <p>
          如果临时专利申请已被授权，将会备注为&ldquo;专利已授权&rdquo;。一旦完整的申请完成，将会备注为
          &ldquo;
          <Link href="https://www.baxterip.com.au/zh/%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E6%9C%AF%E8%AF%AD%E8%A1%A8#%E4%B8%93%E5%88%A9%E7%94%B3%E8%AF%B7%E4%B8%AD">
            专利审理中
          </Link>
          &rdquo;。只有当一个专利实际上已经被授予可在商品上表明&ldquo;澳大利亚专利号XXXXXX&rdquo;的标示，才证明专利被完整的授权了。这些术语是用来通知第三方进度的。严谨没有申请就使用这些术语，并处以罚款。
        </p>
        <h3>什么时候应该寻求专利保护？</h3>

        <p>
          重要的是调查的可能性
          <Link href="https://www.baxterip.com.au/zh/%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E6%9C%AF%E8%AF%AD%E8%A1%A8#%E4%B8%93%E5%88%A9%E4%BF%9D%E6%8A%A4">
            专利保护
          </Link>
          当一个新产品，创建组合或过程，或当修改了产品或过程，将提供的制造商，产品或过程的用户对其竞争对手营销的优势。
        </p>
        <h3>如何在全球范围内获得专利？</h3>

        <p>
          一般来说，应用程序必须提交专利申请，专利授予和执行，在每个国家，你寻求专利保护的发明，依照法律规定的国家。一个澳大利亚专利只在澳大利亚提供保护。如果你想在其他国家申请专利，你通常有两个选择（i）每个国家文件单独的专利申请;
          or（ii）申请一个
          <Link href="https://www.baxterip.com.au/zh/pct%E5%9B%BD%E9%99%85%E4%B8%93%E5%88%A9">
            单独国际
          </Link>
          申请通过指代着什么
          <Link href="https://www.baxterip.com.au/zh/%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E6%9C%AF%E8%AF%AD%E8%A1%A8#%E4%B8%93%E5%88%A9%E5%90%88%E4%BD%9C%E6%9D%A1%E7%BA%A6">
            专利合作（PCT）
          </Link>{' '}
          大约140个国家，包括澳大利亚，成员。一个国际专利申请同样的效果作为国家申请PCT的国家。你可以选择继续在以后的140个国家中选择。你仍然需要满足国家需求和成本在每一个国家，但这可以推迟通过PCT过程多达18个月。
        </p>
        <h3>什么是宽限期？</h3>

        <p>
          一个宽限期允许公开披露的一项发明的发明者透露的情况下他们的发明申请专利之前，例如当他们已经讨论了它与承包商没有保密协议，不影响后续的专利申请的有效性。在澳大利亚，宽限期涵盖的时间不超过12个月的申请日期之前完成的应用程序。然而，重要的是，缺乏一个统一的宽限期或宽限期世界各地的需求意味着依赖宽限期的专利申请将在其他一些国家是无效的。
        </p>
        <h3>什么是专利登记？</h3>

        <p>
          在法律意义上，没有专利注册这样的事情。 &ldquo;
          <Link href="https://www.baxterip.com.au/zh/%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E6%9C%AF%E8%AF%AD%E8%A1%A8">
            专利申请
          </Link>
          &rdquo;是为启动新想法的保护过程而提交的第一份文件。如果专利申请通过
          <Link href="https://www.baxterip.com.au/zh/%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E6%9C%AF%E8%AF%AD%E8%A1%A8">
            审查
          </Link>
          成功，那么我们说&ldquo;专利被授予&rdquo;。在美国，使用的等效术语是&ldquo;专利已经发布&rdquo;。通俗地说，许多人谈论专利注册，因为注册一词有效地适用于商标申请和注册外观设计申请的授予，但不应用于专利。
          &ldquo;专利注册&rdquo;一词确实引起混淆，因为它表明申请专利只是填写表格的问题。而实际上，它涉及更多。
        </p>
        <h3>版权与专利之间的区别是什么？</h3>

        <p>
          版权涵盖所有二维艺术作品和一些三维艺术作品。然而，当使用三维艺术作品商业（如大规模生产）他们自动失去版权保护。为了有效地起诉一方谁在使用你的商业设计，你需要一个注册的设计。可以用来保护版权和注册设计函数概念（直接）这就是专利进来。专利是知识产权的一种类型，封装一个想法用文字和阻止第三方复制这个想法。通常并不是一种有效的版权保护计算机软件或网站应用这些新发展最受专利保护。总之，版权是用来保护艺术和文学作品，
          <Link href="https://www.baxterip.com.au/zh/%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E6%9C%AF%E8%AF%AD%E8%A1%A8#%E8%AE%BE%E8%AE%A1">
            登记设计
          </Link>
          是用来保护的外观设计，使用商业和专利保护功能概念，或者简单地说，这样的工作。
        </p>
        <h3>什么是专利代理人？</h3>

        <p>
          和建议关于专利和专利代理人提供表示相关的知识产权问题，如准备和申请发明专利申请，表示在专利局之前，侵犯专利异议和建议的关系。专利代理人有学位或其他资格的专利技术（传统上在科学或工程）加上进一步资格的法律和实践的知识产权。Section
          200的专利法案1990（车车）提供了一个注册专利代理人和律师之间的通信端在知识产权问题上，和任何记录或文档为这样一个交流的目的，是特权在相同的程度上作为一个律师和他或她的客户端之间的通信。
        </p>
        <h3>专利代理人和专利律师之间的区别是什么？</h3>

        <p>
          在澳大利亚，对于专利问题应该咨询专利律师还是专利代理人常常让人感到困惑。
        </p>

        <p>
          新南威尔士州的专利律师是专门从事知识产权方面工作的律师，是顺利完成the
          Board’s examinations（Diploma in
          Law），或新南威尔士州认可的法律学位，并完成法律实务培训认可项目的专业人士。专利律师通常与负责专利权诉讼的大律师一起工作。
        </p>

        <p>
          专利代理人是：1.拥有工程或科学学位，2.完成了一组专业标准委员会所订明有关知识产权的课题3.在规定期限内在一个专利代理人的监督下工作。专利代理人经常被描述为一部分工程师，一部分律师，并且通常参与撰写专利申请并且负责专利从申请到批准的过程。专利代理人还可以去澳大利亚知识产权局处理专利异议（针对专利权冲突的仲裁程序）。
        </p>
        <h3>专利代理人和客户之间有必要签署保密协议吗？</h3>

        <p>
          澳大利亚专利法规定，注册的知识产权专利律师及其客户之间的对话，或者任何与对话有关的录音及文档记录，都享有普通律师和其客户之间同样的权利。也就是说，注册专利律师在根据信托规定为其客户利益考虑的情况下具有严格保密的义务。
        </p>
        <h3>获得专利的程序是什么？</h3>

        <p>
          更多信息可以看我们的
          <Link href="https://www.baxterip.com.au/zh/%E5%A6%82%E4%BD%95%E7%94%B3%E8%AF%B7%E4%B8%93%E5%88%A9">
            专利程序流程图
          </Link>
          。
        </p>
      </section>
    </Layout>
  )
}
