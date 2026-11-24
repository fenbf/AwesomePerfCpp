# AwesomePerfCpp

A curated collection of C and C++ performance resources: talks, articles, books,
libraries, and tools. Start with measurement, understand the hardware, and use
representative workloads to decide which optimizations are worth keeping.

Originally created in 2016 and maintained by Bartłomiej Filipek, author of
[C++ Stories](https://www.cppstories.com/), a blog about modern C++ and software
development. The blog also hosts the C++ Stories newsletter.

Classic resources remain here when their explanations still help. Benchmark
results describe a particular workload, compiler, and machine; they are not
universal rankings. Historical tools and platform-specific material are marked.

## Contents

- [Getting Started](#getting-started)
- [Talks](#talks)
- [Articles](#articles)
  - [Measurement and profiling](#measurement-and-profiling)
  - [CPU architecture, caches, and data layout](#cpu-architecture-caches-and-data-layout)
  - [Modern C++ and allocation](#modern-c-and-allocation)
  - [Concurrency and low latency](#concurrency-and-low-latency)
  - [Compilers and vectorization](#compilers-and-vectorization)
  - [GPU and heterogeneous computing](#gpu-and-heterogeneous-computing)
- [Sites/Blogs](#sitesblogs)
- [Tools](#tools)
- [Libraries](#libraries)
- [Books](#books)
- [About](#about)
- [License](#license)

## Getting Started

1. Read the [C++ Core Guidelines on performance](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#S-performance)
   for a measurement-first approach.
2. Watch Chandler Carruth's [Tuning C++: Benchmarks, and CPUs, and Compilers! Oh My!](https://www.youtube.com/watch?v=nXaxk27zwlk)
   for the pitfalls of small benchmarks.
3. Read [Algorithms for Modern Hardware](https://en.algorithmica.org/hpc/)
   alongside Scott Meyers' [CPU Caches and Why You Care](https://www.youtube.com/watch?v=WDIkqP4JbkE)
   to connect code and data layout to hardware behavior.
4. Profile a real application with a [tool for your platform](#tools), then isolate
   a hotspot with [Google Benchmark](https://github.com/google/benchmark).
   Keep inputs, optimization flags, and run conditions with the results.
5. Try the [Performance Ninja exercises](https://github.com/dendibakh/perf-ninja)
   to practice diagnosing bottlenecks.

## Talks

Years below identify the conference, not necessarily the video upload date.
The older talks form the collection's foundation; check their hardware and
compiler assumptions when applying specific techniques.

### 2021–2025

- CppCon 2021: Fedor Pikus, [Branchless Programming in C++](https://www.youtube.com/watch?v=g-WPhYREFjk) - When removing branches helps, and when prediction or extra work changes the result.
- CppCon 2024: David Gross, [When Nanoseconds Matter: Ultrafast Trading Systems in C++](https://www.youtube.com/watch?v=sX2nF1fW7kI) - Data structures, communication, and design choices for low latency.
- CppCon 2025: Vittorio Romeo, [More Speed & Simplicity: Practical Data-Oriented Design in C++](https://www.youtube.com/watch?v=SzjJfKHygaQ) - Designing around data layout and access patterns.

### 2013

- Going Native: Andrei Alexandrescu, [Writing Quick Code in C++, Quickly](https://learn.microsoft.com/en-us/shows/goingnative-2013/writing-quick-code-in-cpp-quickly) - A systematic approach to optimizing real code.
- Going Native: Stephan T. Lavavej, [rand() Considered Harmful](https://www.youtube.com/watch?v=LDPMpc-ENqY) - Random-number generation, quality, and implementation costs.
- Going Native: Sean Parent, [C++ Seasoning](https://www.youtube.com/watch?v=qH6sSOr-yk8) - Algorithms and design choices that improve everyday C++ code.

### 2014

- code::dive: Scott Meyers, [CPU Caches and Why You Care](https://www.youtube.com/watch?v=WDIkqP4JbkE) ([slides](https://www.aristeia.com/TalkNotes/codedive-CPUCachesHandouts.pdf)) - A practical introduction to cache-aware programming.
- CppCon: Andrei Alexandrescu, [Optimization Tips - Mo' Hustle Mo' Problems](https://www.youtube.com/watch?v=Qq_WaiwzOtI) - Measurement and concrete optimization experiments.
- CppCon: Mike Acton, [Data-Oriented Design and C++](https://www.youtube.com/watch?v=rX0ItVEVjHc) - Organizing data around the transformations a program performs.
- CppCon: Chandler Carruth, [Efficiency with Algorithms, Performance with Data Structures](https://www.youtube.com/watch?v=fHNmRkzxHWs) - Why algorithmic complexity alone is not enough.

### 2015

- code::dive: Andrei Alexandrescu, [Writing Fast Code I](https://www.youtube.com/watch?v=vrfYLlR8X8k) and [Writing Fast Code II](https://www.youtube.com/watch?v=9tvbz8CSI8M) ([archived slides](https://web.archive.org/web/20160414041329id_/http://codedive.pl/wp-content/uploads/2016/01/FastCode-handouts.pdf)) - A two-part workshop on reasoning about fast code.
- CppCon: Chandler Carruth, [Tuning C++: Benchmarks, and CPUs, and Compilers! Oh My!](https://www.youtube.com/watch?v=nXaxk27zwlk) - Constructing useful benchmarks and interpreting generated code.
- CppCon: Bryce Adelstein-Lelbach, [Benchmarking C++ Code](https://www.youtube.com/watch?v=zWxSZcpeS8Q) - Practical microbenchmarking techniques.
- Meeting C++: Chandler Carruth, [Understanding Compiler Optimization](https://www.youtube.com/watch?v=FnGCDLhaxKU) - Understanding what optimizers can and cannot infer.

### 2016

- ACCU: Andrei Alexandrescu, [Fastware](https://www.youtube.com/watch?v=AxnotgLql0k) - Making performance an explicit engineering concern.
- C++Now: Timur Doumler, [C++ Performance in Practice: Align, Vectorise, Cache, Jump!](https://www.youtube.com/watch?v=c-hZpChQKe0) ([slides](https://github.com/boostcon/cppnow_presentations_2016/blob/master/03_friday/cpp_performance_in_practice_align_vectorise_cache_jump.pdf)) - Connecting C++ code to hardware execution.
- C++Now: David Stone, [Exceptional Performance](https://www.youtube.com/watch?v=0_FQIDEf7_Q) - Exploring the performance implications of exceptions.
- C++Now: Jason Turner, [Practical Performance Practices](https://www.youtube.com/watch?v=lNnBExDoNSQ) - Practical techniques demonstrated with generated code.
- CppCon: Timur Doumler, [Want fast C++? Know your hardware!](https://www.youtube.com/watch?v=BP6NxVxDQIs) - Hardware details that affect software design.
- CppCon: Jason Turner, [Practical Performance Practices](https://www.youtube.com/watch?v=uzF4u9KgUWI) - Another presentation of the topic, at CppCon.
- CppCon: Chandler Carruth, [High Performance Code 201: Hybrid Data Structures](https://www.youtube.com/watch?v=vElZc6zSIXM) - Combining data structures to fit access patterns.
- CppCon: Paul McKenney, [Beyond the Issaquah Challenge: High-Performance Scalable Complex Updates](https://www.youtube.com/watch?v=qcD2Zj9GgI4) - Scalable concurrent updates.
- CppCon: D. Dechev and D. Zhang, [High Performance C++ Concurrent Transactional Data Structures](https://www.youtube.com/watch?v=uDNb8JL0vv8) - Transactional approaches to concurrent containers.
- CppCon: Matthew Bentley, [Colonies, performance and why you should care](https://www.youtube.com/watch?v=wBER1R8YyGY) - Container design and allocation tradeoffs.
- CppCon: Christiaan Pretorius, [Cache Optimized Hash Tables](https://www.youtube.com/watch?v=aXj_DsIx1xs) - Hash-table layout and cache behavior.
- CppCon: Tim Haines, [Improving Performance Through Compiler Switches](https://www.youtube.com/watch?v=w5Z4JlMJ1VQ) - Investigating build options; validate flags against your compiler version.

## Articles

### Measurement and profiling

- [C++ Core Guidelines: Performance](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#S-performance) - Principles for measuring and improving performance without sacrificing correctness.
- [C++ Best Practices: Considering Performance](https://github.com/cpp-best-practices/cppbestpractices/blob/master/08-Considering_Performance.md) - Runtime and build-time considerations; some tool examples are historical.
- [ETW Central](https://randomascii.wordpress.com/2015/09/24/etw-central/), Bruce Dawson - Windows tracing examples and investigations.
- [Micro benchmarking libraries for C++](https://www.cppstories.com/2016/01/micro-benchmarking-libraries-for-c/), Bartłomiej Filipek (2016) - Historical comparison; check library activity before choosing a dependency.
- [How to start with Software Optimization](https://www.cppstories.com/2014/07/flexible-particle-system-how-to-start/), Bartłomiej Filipek (2014) - Establishing a baseline and profiling a particle system.
- [gprof, Valgrind and gperftools: an evaluation of CPU profiling tools on Linux](https://web.archive.org/web/20180103184411/http://gernotklingler.com:80/blog/gprof-valgrind-gperftools-evaluation-tools-application-level-cpu-profiling-linux/), Gernot Klingler (2015, archived) - Historical comparison of profiler overhead and functionality.
- [Memory Profiling Part 1: Introduction](https://easyperf.net/blog/2024/02/12/Memory-Profiling-Part1), Denis Bakhvalov (2024) - A series on footprint, memory accesses, and hardware-level bottlenecks.
- [Strobelight: A profiling service built on open source technology](https://engineering.fb.com/2025/01/21/production-engineering/strobelight-a-profiling-service-built-on-open-source-technology/), Meta engineering (2025) - Production profiling, symbolization, and feedback-directed optimization at fleet scale.
- [C++ timing strategies compared in Windows](https://baremetalcode.blogspot.com/2011/10/c-timing-strategies-compared-in-windows.html) (2011) - Historical timing experiments; old Windows and hardware assumptions apply.

### CPU architecture, caches, and data layout

- [Why do CPUs have multiple cache levels?](https://fgiesen.wordpress.com/2016/08/07/why-do-cpus-have-multiple-cache-levels/), Fabian Giesen - Cache hierarchy, latency, and bandwidth.
- [Taking advantage of cache coherence in your programs](https://supercomputingblog.com/optimization/taking-advantage-of-cache-coherence-in-your-programs/) - Memory access experiments; distinguish spatial locality from hardware coherence protocols.
- [Gallery of Processor Cache Effects](https://igoro.com/archive/gallery-of-processor-cache-effects/), Igor Ostrovsky - C# examples illustrating hardware effects that also matter in C and C++.
- [Data Oriented Design by example](https://nikitablack.github.io/post/data_oriented_design_by_example/), Nikita Black (2017) - Comparing object-oriented and data-oriented layouts in a simulation.
- [Hash Functions all the way down](https://aras-p.info/blog/2016/08/02/Hash-Functions-all-the-way-down/) and [More Hash Function Tests](https://aras-p.info/blog/2016/08/09/More-Hash-Function-Tests/), Aras Pranckevičius (2016) - Workload-dependent hash-function experiments.
- [Why GNU grep is fast](https://lists.freebsd.org/pipermail/freebsd-current/2010-August/019310.html), Mike Haertel (2010) - Algorithm selection and reducing work in a production utility.
- [How We Beat C++ STL Binary Search](https://web.archive.org/web/20170314110727/https://realm.io/news/how-we-beat-cpp-stl-binary-search/), Realm (archived) - A historical search case study; archive replay availability can vary.
- [C++ benchmark: std::vector vs std::list vs std::deque](https://baptiste-wicht.com/posts/2012/12/cpp-benchmark-vector-list-deque.html), Baptiste Wicht (2012) - Historical container measurements, not a universal ordering.
- [Container Study](http://www.joshbarczak.com/blog/?p=525), Josh Barczak - Comparing container behavior under particular access patterns.
- [Associative-container performance tests](https://gcc.gnu.org/onlinedocs/libstdc++/manual/policy_based_data_structures_test.html), GCC libstdc++ - Policy-based data-structure experiments; the benchmark environments are historical.
- [The Performance API (PAPI)](https://icl.utk.edu/papi/) - Portable access to performance counters; available events depend on the platform.
- [Roofline Performance Model](https://docs.nersc.gov/tools/performance/roofline/), NERSC - Relating arithmetic intensity to compute and memory-bandwidth limits.
- [Intel 64 and IA-32 Architectures Optimization Reference Manuals](https://www.intel.com/content/www/us/en/developer/articles/technical/intel64-and-ia32-architectures-optimization.html) - Official manuals; use the volume relevant to your target microarchitecture.
- [That's Not Normal: the Performance of Odd Floats](https://randomascii.wordpress.com/2012/05/20/thats-not-normalthe-performance-of-odd-floats/), Bruce Dawson - Subnormal floating-point values and hardware-dependent slow paths.

### Modern C++ and allocation

- [Three Optimization Tips for C++](https://engineering.fb.com/2013/03/15/developer-tools/three-optimization-tips-for-c/), Andrei Alexandrescu (2013) - Concrete examples of reducing the work an algorithm performs.
- [Polymorphic Allocators, std::vector Growth and Hacking](https://www.cppstories.com/2020/06/pmr-hacking.html/), Bartłomiej Filipek (2020) - C++17 memory resources, allocation tracing, and container growth.
- [Three Benchmarks of C++20 Ranges vs Standard Algorithms](https://www.cppstories.com/2022/ranges-perf/), Bartłomiej Filipek (2022) - Comparing composition, temporary objects, and build time on the tested implementations.
- [C++ String Conversion: Exploring std::from_chars in C++17 to C++26](https://www.cppstories.com/2018/12/fromchars/), Bartłomiej Filipek (updated 2024) - Non-allocating numeric conversion, benchmarks, and later standard changes.
- [Details of std::mdspan from C++23](https://www.cppstories.com/2025/cpp23_mdspan/), Bartłomiej Filipek (2025) - Non-owning multidimensional views, extents, and layout policies; includes C++26 additions.
- [C++26: Standard Library Hardening Experiments](https://www.cppstories.com/2026/hardening-experiments/), Bartłomiej Filipek (2026) - Runtime checking and its measured cost; distinguish implementation settings and standard versions.

### Concurrency and low latency

- [Correctly implementing a spinlock in C++](https://rigtorp.se/spinlock/), Erik Rigtorp (2020) - Memory ordering and contention costs; use this to understand tradeoffs, not to replace every mutex.
- [Optimizing a ring buffer for throughput](https://rigtorp.se/ringbuffer/), Erik Rigtorp (2021) - A measured single-producer/single-consumer queue case study with cache-coherence analysis.
- [Thread Count Scaling Part 1: Introduction](https://easyperf.net/blog/2024/05/10/Thread-Count-Scaling-Part1), Denis Bakhvalov (2024) - A series investigating scaling, SMT, and workload bottlenecks.
- [Guide into OpenMP: Easy multithreading programming for C++](https://bisqwit.iki.fi/story/howto/openmp/) - An introductory tutorial; examples reflect older OpenMP versions.

### Compilers and vectorization

- [Clang: Profile Guided Optimization](https://clang.llvm.org/docs/UsersManual.html#profile-guided-optimization) - Instrumentation and sampling workflows; train with representative inputs.
- [ThinLTO](https://clang.llvm.org/docs/ThinLTO.html), Clang - Cross-module optimization with parallel and incremental compilation.
- [Auto-Vectorization in LLVM](https://llvm.org/docs/Vectorizers.html) - Loop and SLP vectorization, optimization remarks, and reasons vectorization can fail.

### GPU and heterogeneous computing

- [CUDA C++ Best Practices Guide](https://docs.nvidia.com/cuda/cuda-c-best-practices-guide/), NVIDIA - Profiling, memory transfers, memory access, and kernel optimization.
- [oneAPI GPU Optimization Guide](https://www.intel.com/content/www/us/en/docs/oneapi/optimization-guide-gpu/2025-2/overview.html), Intel (2025 edition) - SYCL and OpenMP offload, work-group sizing, registers, and host/device coordination.

## Sites/Blogs

- [Agner's CPU blog](https://www.agner.org/forum/) - Processor architecture and optimization discussions.
- [Agner Fog's Software optimization resources](https://www.agner.org/optimize/) - Manuals, instruction tables, and microarchitecture analysis.
- [C++ Stories](https://www.cppstories.com/) - Modern C++ examples and performance experiments.
- [Daniel Lemire's blog](https://lemire.me/blog/) - SIMD, parsing, algorithms, and measured performance experiments.
- [The Every Computer Performance Blog](https://rwwescott.wordpress.com/) - Capacity planning, modeling, and interpreting results.
- [Random ASCII](https://randomascii.wordpress.com/) - Windows profiling, correctness, and performance investigations.
- [The ryg blog](https://fgiesen.wordpress.com/) - Low-level programming, graphics, and hardware explanations.
- [The Supercomputing Blog](https://supercomputingblog.com/) - Historical optimization and parallel-programming articles.
- [Wojciech Muła's articles](http://0x80.pl/notesen.html) - SIMD, parsing, and performance experiments.

## Tools

Choose tools by platform and the question you need to answer. Availability,
licensing, and supported hardware can change; consult each project's documentation.

### CPU profiling and tracing

- [AMD uProf](https://www.amd.com/en/developer/uprof.html) - CPU profiling and system analysis, including AMD hardware counters.
- [Compiler Explorer](https://godbolt.org/) - Inspect optimized assembly and compare compilers; it does not replace workload profiling.
- [gperftools](https://github.com/gperftools/gperftools) - CPU and heap profiling utilities, plus TCMalloc.
- [Intel VTune Profiler](https://www.intel.com/content/www/us/en/developer/tools/oneapi/vtune-profiler.html) - CPU and GPU performance analysis; hardware features depend on the target.
- [Linux perf](https://perfwiki.github.io/main/tutorial/) - Sampling, hardware counters, call graphs, and annotation on Linux.
- [TAU Performance System](https://www.cs.uoregon.edu/research/tau/home.php) - Profiling and tracing parallel applications.
- [Tracy](https://github.com/wolfpld/tracy) - Instrumentation and sampling, CPU/GPU timelines, allocations, and lock analysis.
- [uops.info](https://uops.info/) - Measured x86 instruction latency, throughput, and port usage across microarchitectures.
- [Very Sleepy](http://www.codersnotes.com/sleepy/) - A sampling profiler for Windows.
- [Visual Studio CPU profiling](https://learn.microsoft.com/en-us/visualstudio/profiling/beginners-guide-to-performance-profiling) - Native-code CPU usage analysis in Visual Studio.
- [Windows Performance Toolkit](https://learn.microsoft.com/en-us/windows-hardware/test/wpt/) - Windows Performance Recorder and Analyzer for ETW-based investigations.

### Memory and allocation analysis

- [Deleaker](https://www.softanics.com/deleaker) - Commercial Windows allocation and resource-leak analysis.
- [heaptrack](https://github.com/KDE/heaptrack) - Linux heap allocation tracing and analysis of allocation hotspots.
- [Valgrind](https://valgrind.org/) - Instrumentation tools including Cachegrind, Callgrind, and Massif; simulation and instrumentation have substantial overhead.
- [WonderLeak](https://www.relyze.com/wonderleak.html) - Windows heap and handle allocation profiling.

### GPU and parallel analysis

- [Intel Advisor](https://www.intel.com/content/www/us/en/developer/tools/oneapi/advisor.html) - Vectorization, threading, and offload analysis; check support for your toolchain.
- [NVIDIA Nsight Systems](https://developer.nvidia.com/nsight-systems) - CPU/GPU timelines and system-level analysis.
- [NVIDIA Nsight Compute](https://developer.nvidia.com/nsight-compute) - CUDA kernel profiling and hardware metrics.
- [Qualcomm Snapdragon Profiler](https://www.qualcomm.com/developer/software/snapdragon-profiler) - Profiling for supported Snapdragon platforms; check device and OS compatibility.

### Historical and specialized tools

- [AMD CodeXL](https://github.com/GPUOpen-Archive/CodeXL) - Retired; source retained for historical reference. Start with current AMD tools for new investigations.
- [AQTime documentation](https://support.smartbear.com/aqtime/docs/) - Legacy native-code profiler documentation; not a recommendation of current product availability.
- [GlowCode](http://www.glowcode.com/summary1_gc.htm) - Windows profiling and leak detection; verify compatibility with your compiler and OS.
- [OProfile](http://oprofile.sourceforge.net/about/) - Historical Linux system profiler; automated access may encounter a bot challenge.
- [Oracle Developer Studio](https://www.oracle.com/application-development/technologies/developerstudio-features.html) - Specialized tooling including Performance Analyzer for supported Oracle platforms.
- [Proffy source](https://github.com/pauldoo/proffy) - Historical Windows native-code profiler.

## Libraries

Benchmarking frameworks measure the benchmark you write. Account for eliminated
work, setup costs, warm caches, repetitions, and the surrounding application.

### Benchmarking

- [Google Benchmark](https://github.com/google/benchmark) - Microbenchmark framework with repetitions, fixtures, counters, and optimization barriers.
- [Celero](https://github.com/DigitalInBlue/Celero) - Benchmark authoring with baseline comparisons.
- [Hayai](https://github.com/nickbruun/hayai) ([archived introduction](https://web.archive.org/web/20160308091453/https://bruun.co/2012/02/07/easy-cpp-benchmarking)) - An older C++ microbenchmark framework; retained for existing users.
- [Nonius](https://github.com/libnonius/nonius) - Historical framework with statistical analysis; the source replaces the unavailable project website.

### Allocation, SIMD, and parallelism

- [fast_float](https://github.com/fastfloat/fast_float) - Numeric parsing with a `from_chars`-style interface and documented accuracy guarantees.
- [Highway](https://github.com/google/highway) - Portable SIMD intrinsics with multiple architectures and runtime target dispatch.
- [mimalloc](https://github.com/microsoft/mimalloc) - General-purpose allocator; evaluate throughput, memory use, and integration on your workload.
- [oneTBB](https://github.com/uxlfoundation/oneTBB) - Task-based parallelism, concurrent containers, and scalable allocation facilities.
- [simdjson](https://github.com/simdjson/simdjson) - SIMD-based JSON parsing with runtime CPU selection and published performance methodology.

## Books

- [Algorithms for Modern Hardware](https://en.algorithmica.org/hpc/), Sergey Slotin - Free online treatment of CPU architecture, caches, SIMD, and algorithm engineering; some planned chapters are incomplete.
- [Performance Analysis and Tuning on Modern CPUs](https://github.com/dendibakh/perf-book), Denis Bakhvalov (second edition, 2024) - Free book and examples on hardware-aware measurement and tuning.
- [Optimizing software in C++](https://www.agner.org/optimize/optimizing_cpp.pdf), Agner Fog - Free optimization manual, maintained alongside the author's processor-specific references.
- [Optimizing C++, Wikibooks](https://en.wikibooks.org/wiki/Optimizing_C%2B%2B) - Community reference; coverage and age vary by chapter.
- [Systems Performance: Enterprise and the Cloud](https://www.brendangregg.com/systems-performance-2nd-edition-book.html), Brendan Gregg (second edition, 2020) - System-level methodology and Linux observability.
- *C++ Concurrency in Action*, second edition, Anthony Williams - C++ concurrency and the memory model.
- *Optimized C++: Proven Techniques for Heightened Performance*, Kurt Guntheroth - Practical C++ optimization and measurement.
- *Every Computer Performance Book*, Bob Wescott - Performance analysis, capacity planning, and presenting results.
- *Power and Performance: Software Analysis and Optimization*, Jim Kukunas - System-level analysis with a power/performance focus.
- *Video Game Optimization*, Eric Preisz - Historical game-development optimization practices.
- *The Software Optimization Cookbook: High Performance Recipes for IA-32 Platforms*, second edition - Historical x86 material; instruction and compiler advice needs target-specific validation.
- [C++ Optimization Bibliography](https://oldhandsblog.blogspot.com/2016/09/c-optimization-bibliography.html), Kurt Guntheroth (2016) - Further historical reading.

## About

Started by [Bartłomiej Filipek](https://github.com/fenbf) in 2016, inspired by
[awesome](https://github.com/sindresorhus/awesome). Suggestions and corrections
are welcome: read the [contribution guidelines](https://github.com/fenbf/AwesomePerfCpp/blob/master/CONTRIBUTING.md)
and open a pull request with a short explanation of the resource's value.

## License

This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).
